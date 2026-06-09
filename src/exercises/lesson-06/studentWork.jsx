import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { filterTasks } from './utils/filterTasks';
import UserProfile from './components/UserProfile';
import TaskFilterButtons from './components/TaskFilterButtons';
import TaskItem from './components/TaskItem';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div>
      <UserProfile name="Student" />
      <TaskFilterButtons filter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
