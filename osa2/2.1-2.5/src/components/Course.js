import React from "react";

export const Course = (props) => {
  const allParts = [];
  allParts.push(<h1 key={1}>Web development curriculum</h1>);

  const Header = (props) => {
    return(
      <h2>
        {props.course}
      </h2>
    )
  };

  const Part = (props) => {
    const printline = props.parts +" "+ props.exercise;
    return (
      <React.Fragment>
        {printline}
        <br/>
      </React.Fragment>
    );
  };

  const Content = (props) => {

    const exerciseArr = [];

    for(let i = 0; i<props.parts.length; i++){
      let exercise;
      const parts = props.parts[i].name;
      (props.parts[i] === undefined || props.parts[i] === null)? exercise = 0 : exercise = props.parts[i].exercises;

      exerciseArr.push(<Part key={i} parts={parts} exercise={exercise}/>)
    }

    return(
      <div>
        {exerciseArr}
      </div>
    );
  };

  const Total = (props) => {

    const totalExercises = props.parts.reduce((a, c) => a+c.exercises,0);
    return(
      <React.Fragment>
        <p style={{fontWeight: "bold"}}>total of {totalExercises} exercises</p>
      </React.Fragment>
    );
  };

  const courseParts = (name, parts) =>{
    return(
      <div>
        <Header course={name}/>
        <Content parts={parts}/>
        <Total  parts={parts}/>
      </div>
    )
  };

  for(let g of props.courses){
    allParts.push(courseParts(g.name,g.parts))
  }

  return(
    allParts
  );
}