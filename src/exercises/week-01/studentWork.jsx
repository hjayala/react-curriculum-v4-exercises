//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file 

export default function StudentWork() {
  //add variables here 
  const name = "Hector Ayala";
  const age = 21;
  const hobbies = [
    { id: 1, title: "Coding" },
    { id: 2, title: "Videogames" },
    { id: 3, title: "Rollerblading" },
    { id: 4, title: "Speedcubing" },
    { id: 5, title: "Drawing" },
    { id: 6, title: "Piano" }
  ]

  return (
    <div>
      {/* add JSX here */}
      <h1>
        HEY! {name.toUpperCase()} HERE!
      </h1>
      <p>
        Hello there! My name is {name}! I am a {age} years old Computer Science BS 3rd year student at Barry University!
      I was born in San Pedro Sula, Honduras. I have two cats and I love building computers!
      </p>
      <ul>
          {hobbies.map(hobby => <li key={hobby.id}>{hobby.title}</li>)}
      </ul>
    </div>
  );
}
