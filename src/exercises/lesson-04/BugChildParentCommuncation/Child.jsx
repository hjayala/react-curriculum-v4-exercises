export default function Child({ onIncrement }) {
  // receive the prop
  return <button onClick={onIncrement}>Increment Counter</button>;
}
