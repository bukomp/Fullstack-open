import React from'react';

const Countries = (props) => {
  const countries = [];

  if(props.personData !== undefined) {
    if (props.newFilter) {
      props.personData.forEach(person => {
        if (person.name.includes(props.newFilter)) countries.push(<li
          key={person.name}>{`${person.name} ${person.number}`}</li>);
      })
    } else {
      props.personData.forEach(person => {
        countries.push(<li key={person.name}>{`${person.name} ${person.number}`}</li>);
      })
    }
  }
  return(
    <ul style={{listStyleType: "none"}}>
      {countries}
    </ul>
  );
};