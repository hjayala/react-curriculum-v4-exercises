//src/exercises/week-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
/*
    The useEffect in line 16 was missing a dependency array. Without this, it would run after every render,
    which would create an infinite loop. By simply adding an empty dependency array ( [] ), the effect
    now only runs once when the component first mounts.
*/