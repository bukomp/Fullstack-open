import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack -sovelluskehitys';
  const part1 = 'Reactin perusteet';
  const exercises1 = 10;
  const part2 = 'Tiedonvälitys propseilla';
  const exercises2 = 7;
  const part3 = 'Komponenttien tila';
  const exercises3 = 14;

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
      const parts = props.parts[i];
      (props.exercises[i] === undefined || props.exercises[i] === null)? exercise = 0 : exercise = props.exercises[i];

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
    for(let g of props.exercises){
      totalExercises += g;
    }

    return(
      <React.Fragment>
        <p>yhteensä {totalExercises} tehtävää</p>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));