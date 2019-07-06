import React, { useState, useEffect } from 'react'




const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);


  const [ newFilter, setFilter ] = useState('');

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  //useEffect(()=>{console.log(persons);},[persons])

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNewName(e.target.value);
        break;
      case "number":
        setNewNumber(e.target.value);
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!(persons.find((person) => {return person.name === newName})||false)){
      const tempArr = persons;
      tempArr.push({name:newName, number: newNumber})
      setPersons(tempArr);
      setNewName('');
      setNewNumber('');
    } else {
      alert(`"${newName}" is already added to phonebook`);
    }
  }

  const Numbers = (props) => {

    const persons = [];
    if(props.newFilter){
      props.personData.forEach(person => {
        if(person.name.includes(props.newFilter))persons.push(<li key={person.name}>{`${person.name} ${person.number}`}</li>);
      })
    }else{
      props.personData.forEach(person => {
        persons.push(<li key={person.name}>{`${person.name} ${person.number}`}</li>);
      })
    }

    return(
      <ul style={{listStyleType: "none"}}>
        {persons}
      </ul>
    );
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with <input
          name={"filter"}
          value={newFilter}
          onChange={handleFilterChange}
      />
      </form>
      <h2>add a new</h2>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          name:
          <input
            name={"name"}
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>number:
          <input
            name={"number"}
            value={newNumber}
            onChange={handleChange}
          /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers personData={persons} newFilter={newFilter}/>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App