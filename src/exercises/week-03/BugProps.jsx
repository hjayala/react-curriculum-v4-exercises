// src/exercises/week-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this week's components.
*/
import { useState } from 'react';


export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
/*
    The issue was that the message variable was simply a variable, so when its value
    would be changed, it would not update, as React does not re-render based on variable
    value changes, React re-renders based on state changes. So simply changing the formatting
    from using a regular variable to using states fixes the issue.
*/