import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import NewPerson from './components/NewPerson'

const App = () => {
  const [ persons, setPersons] = useState([]);


  const [ newFilter, setFilter ] = useState('');
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons').then(r => {
      console.log(r)
      setPersons(r.data)
    })
  }, []);


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

      <Numbers
        personData={persons}
        newFilter={newFilter}
      />
    </div>
  )

}

export default App