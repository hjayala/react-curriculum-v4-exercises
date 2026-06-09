import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Explanation:
// StrictMode mounts the component twice in development to catch side effects.
// Without a cleanup function, two intervals were created and never cleared,
// causing the count to increment by 2 every second. Returning clearInterval
// from the effect ensures the first interval is destroyed before the second
// one is created, so only one is ever running at a time.
