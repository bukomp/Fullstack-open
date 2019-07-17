const express = require('express')
const url  = require('url');


const app = express()

const persons = [
  {
    "name": "Anton",
    "number": "42",
    "id": 6
  },
  {
    "name": "Edvard",
    "number": "123123",
    "id": 8
  }
]



app.get('/api/*', (req, res) => {
  const url_parts = req.path.split('/');
  console.log(url_parts);
  switch(url_parts[2]){
    case "persons":
      let response = `no data by id:${url_parts[3]} found`;

      (url_parts[3])?persons.some(person=>{
        if(person.id === +url_parts[3]){
          console.log(person.id);
          response = person;
          return true;
        }
      }):response = persons;

      res.send(response)
      break;
    default:
      res.send("<h1>no data</h1>")
      break;
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})