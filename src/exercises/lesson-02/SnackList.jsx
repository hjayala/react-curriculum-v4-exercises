export default function SnackList() {
  const snacks = [
    { name: 'Cheetos', rank: 5 },
    { name: 'Takis', rank: 4 },
    { name: 'Sugar Cookies', rank: 3 },
    { name: 'Gummy Bears', rank: 2 },
    { name: 'Trial Mix', rank: 1 },
  ];

  /* 
        Instructions ask to use .toSrted() but that seems to be deprecated or
        I'm simply unable to get it to work. Used sort() instead.

        Follow-up comment and correction: default toSorted() uses alphabetical order.
        For numbers, I believe, a criteria needs to be specified.

        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
    */
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      <ul>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ul>
    </>
  );
}
