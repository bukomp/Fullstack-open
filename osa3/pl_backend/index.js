const express = require('express')
const fs = require('fs')
const app = express()

let persons;

const readFile = () => {
  fs.readFile('./db', 'utf-8', (err, data)=>{
  persons = JSON.parse(data).persons;
  console.log(persons);
  })
}


app.delete('/api/*', (req,  res) => {
  const url_parts = req.path.split('/');
  console.log(url_parts);
  switch(url_parts[2]){
    case "persons":
      let response;

      url_parts[3]?


        persons.forEach(person=>{

          if(person.id === +url_parts[3]){

            response = {
              message: `Contact with id:${+url_parts[3]} has been removed`,
              data: persons.filter(i => i.id !== +url_parts[3])
            };
            fs.writeFile('./db', JSON.stringify({persons:persons.filter(i => i.id !== +url_parts[3])}), err => {
              if (err) throw err;
            })
            res.json(response);
          }
        }):res.status(404).json({
          error: `no data by id:${url_parts[3]} found`
        });
      break;
    default:
      break;
  }
})

app.get('/api/*', (req, res) => {
  const url_parts = req.path.split('/');
  console.log(url_parts);
  switch(url_parts[2]){
    case "persons":
      let response;

      url_parts[3]?
        persons.some(person=>{
        if(person.id === +url_parts[3]){
          console.log(person.id);
          response = person;
          return true;
        }
      }):response = persons;


      response?
        res.send(response)
        :res.status(404).json({
          error: `no data by id:${url_parts[3]} found`
        });
      break;
    default:
      res.send("<h1>no data</h1>")
      break;
  }
})

app.get('/info', (req, res) => {
  const info_page = `
      <div>
        Phonebook has info for ${persons.length} people
      </div>
      <div>
        ${new Date()}
      </div>
    `
    res.send(info_page);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})