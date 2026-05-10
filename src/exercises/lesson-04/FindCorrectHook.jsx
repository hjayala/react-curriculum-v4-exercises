import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0); // useState, not useRef

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
