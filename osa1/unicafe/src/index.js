import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ButtonBoard = (props) => {
  return(
    <div>
      <h2>anna palautetta</h2>
      <button onClick={props.addGood}>hyvä</button>
      <button onClick={props.addNeutral}>neutraali</button>
      <button onClick={props.addBad}>huono</button>
    </div>
  );
};

const Statistics = (props) => {
  return(
    <React.Fragment>
      <h2>statistiikka</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </React.Fragment>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good+1);
  };
  const addNeutral = () => {
    setNeutral(neutral+1);
  };
  const addBad = () => {
    setBad(bad+1);
  };

//for debugging purposes
  useEffect(()=>{
    console.clear();
    console.log(good);
    console.log(neutral);
    console.log(bad);
  });

  return (
    <div>
      <ButtonBoard addGood={addGood} addNeutral={addNeutral} addBad={addBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));