import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(); //create a ref

  function focusInput() {
    inputRef.current.focus(); //directly call focus() on the DOM element
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
