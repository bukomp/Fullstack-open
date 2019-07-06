import React, { useState } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import NewPerson from './components/NewPerson'

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

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNewName(e.target.value);
        break;
      case "number":
        setNewNumber(e.target.value);
        break;
      case "filter":
        setFilter(e.target.value);
        break;
      default:
        console.log("something went completely wrong")
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



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        name={"filter"}
        value={newFilter}
        onChange={handleChange}
      />

      <h2>add a new</h2>

      <NewPerson
        nameName={"name"}
        nameValue={newName}
        nameOnChange={handleChange}

        numName={"number"}
        numValue={newNumber}
        numOnChange={handleChange}

        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <Numbers personData={persons} newFilter={newFilter}/>
l    </div>
  )

}

export default App