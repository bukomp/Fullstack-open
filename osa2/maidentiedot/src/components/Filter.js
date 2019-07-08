import React from 'react'


const Filter = (props) => {
  return(
      <input
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
  );
}

export default Filter;