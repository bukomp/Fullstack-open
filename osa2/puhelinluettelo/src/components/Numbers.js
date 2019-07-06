import React from "react";

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

export default Numbers;