import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setError('');
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        className="button"
        type="button"
        onClick={handleGetPost}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      <div className="content">
        {error && <p>{error}</p>}
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
        {!post && !error && !isLoading && (
          <p>Click the button to load a post.</p>
        )}
      </div>
    </div>
  );
}
