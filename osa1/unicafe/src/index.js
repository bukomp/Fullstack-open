import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ButtonBoard = (props) => {
  return(
    <div>
      <h2>{props.text}</h2>
      <Button handleClick={props.addGood} text={"hyvä"}/>
      <Button handleClick={props.addNeutral} text={"neutraali"}/>
      <Button handleClick={props.addBad} text={"huono"}/>
    </div>
  );
};

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => {
  return(
    <React.Fragment>
      {
        (props.good || props.neutral || props.bad) !== 0 &&
        <React.Fragment>
          <h2>{props.text}</h2>
          <table>
            <tbody>
              <Statistic text={"hyvä"} value={props.good}/>
              <Statistic text={"neutraali"} value={props.neutral}/>
              <Statistic text={"huono"} value={props.bad}/>
              <Statistic text={"yhteensä"} value={props.good + props.neutral + props.bad}/>
              <Statistic text={"keskiarvo"} value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
              <Statistic text={"positiivisia"} value={((props.good / (props.good + props.neutral + props.bad)) * 100) + "%"}/>
            </tbody>
          </table>
        </React.Fragment>
      }
      {
        (props.good || props.neutral || props.bad) === 0 &&
        <p>Ei yhtään palautetta annettu</p>
      }
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

  return (
    <div>
      <ButtonBoard addGood={addGood} addNeutral={addNeutral} addBad={addBad} text={"anna palautetta"}/>
      <Statistics good={good} neutral={neutral} bad={bad} text={"statistiikka"}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));