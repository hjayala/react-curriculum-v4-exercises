
function SnackList() {
    const snackList = [
        { rank: 5, name: "Cheetos" },
        { rank: 4, name: "Takis" },
        { rank: 3, name: "String Cheese" },
        { rank: 2, name: "Cheez-Its" },
        { rank: 1, name: "Mixed Nuts" }
      ]

    const sortedSnackList = snackList.sort((a,b) => a.rank - b.rank);
    
    return (
        <ol>
            {sortedSnackList.map(snack => <li key={snack.rank}>{snack.name}</li>)}
        </ol>
    );
}

export default SnackList;