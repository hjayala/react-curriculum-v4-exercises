import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    if (isEditing) {
      // Currently editing — this acts as Cancel
      setWorkingText(question.question);
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    } else {
      setWorkingText(question.question);
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };

  const handleSave = () => {
    if (workingText.trim()) {
      dispatch({
        type: 'UPDATE_QUESTION_TEXT',
        payload: { id: question.id, newText: workingText.trim() },
      });
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  const handleUpdateOption = (optionIndex, newText) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: { questionId: question.id, optionIndex, newText },
    });
  };

  const handleDeleteOption = (optionIndex) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex },
    });
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter new option text:');
    if (optionText && optionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: optionText.trim() },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['title-edit']}>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
              className={styles['title-input']}
              autoFocus
            />
            <div className={styles['title-actions']}>
              <button
                onClick={handleSave}
                className={styles['save-btn']}
                disabled={!workingText.trim()}
              >
                Save
              </button>
              <button onClick={handleEdit} className={styles['cancel-btn']}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleUpdateOption(index, e.target.value)
                      }
                      className={styles['option-input']}
                    />
                    <div className={styles['option-actions']}>
                      <button
                        className={styles['option-delete-btn']}
                        onClick={() => handleDeleteOption(index)}
                        disabled={question.options.length <= 2}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>
          {isEditing && (
            <button
              className={styles['add-option-btn']}
              onClick={handleAddOption}
            >
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
