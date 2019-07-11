import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import {post, get, deleteLine, put} from './components/ServerCall'


const App = () => {

  const [ newFilter, setFilter ] = useState('');
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const [ persons, setPersons] = useState([]);

  useEffect(()=>{
    get().then(r => {
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

      post({name:newName, number: newNumber}).then(r => {
        const tempArr = Array.from(persons);
        tempArr.push(r.data)
        setPersons(tempArr);
        setNewName('');
        setNewNumber('');
      })


    } else if(window.confirm(`${newName} is already added. Replace the old number?`)) {
      persons.forEach(person => {
        if (person.name === newName){
          put(person.id, {name: person.name, number: newNumber})
          .then(r => {
            get()
              .then(r => {
                setPersons(r.data)
              })

          })

        }
      })
    }
  }

  const handleDelete = (e) => {
    const id = e.target.id

    if(window.confirm("Are you shure you want to delete this object?")){
      deleteLine(id).then(r => {
        get()
          .then(r => {
          setPersons(r.data)
        })

      })
    }
  }

  return (
    <React.Fragment>
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
        onDelete={handleDelete}
        personData={persons}
        newFilter={newFilter}
      />
    </React.Fragment>
  )

}

export default App