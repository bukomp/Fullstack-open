import React from 'react';
import './App.css';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  const Header = (props) => {
    return(
      <h1>
        {props.course}
      </h1>
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

    let totalExercises = 0;
    for(let g of props.parts){
      totalExercises += g.exercises;
    }

    return(
      <React.Fragment>
        <p style={{fontWeight: "bold"}}>total of {totalExercises} exercises</p>
      </React.Fragment>
    );
  };

  const Course = (props) => {
    return(
      <React.Fragment>
        <Header course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total  parts={props.course.parts}/>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
