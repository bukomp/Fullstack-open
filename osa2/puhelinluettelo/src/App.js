import React, { useState, useEffect } from 'react'


const Numbers = (props) => {

  const names = [];

  for(let g of props.personData){
    names.push(<li key={g.name}>{g.name}</li>);
  }

  return(
    <ul style={{listStyleType: "none"}}>
      {names}
    </ul>
  );
}


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [ newName, setNewName ] = useState('');
  useEffect(()=>{console.log(persons);},[persons])

  const handleChange = (e) => {
    setNewName(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const tempArr = persons;
    tempArr.push({name:newName})
    setPersons(tempArr);
    setNewName('');
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          name:
          <input
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers personData={persons}/>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App