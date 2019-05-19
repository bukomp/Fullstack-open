import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  };

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
        <p>yhteensä {totalExercises} tehtävää</p>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));