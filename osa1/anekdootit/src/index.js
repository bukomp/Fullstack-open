import React, { useState} from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const MostVoted = (props) => {
  const maxValueIndex = props.points.reduce((Index, x, i, arr) => x > arr[Index] ? i : Index, 0);
  return(
    <React.Fragment>
      <p>"{props.anecdotes[maxValueIndex]}"</p>
      <p>has {props.points[maxValueIndex]} votes</p>
    </React.Fragment>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0));
  return (
    <React.Fragment>
    <div>
      <h1>Anecdote of the day</h1>
      <p>"{props.anecdotes[selected]}"</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={()=>{
            let r;
            while(true){
              r = Math.floor(Math.random() * props.anecdotes.length);
              if(selected !== r){
                break;
              }
            }
            setSelected(r);
          }} text={"get new anecdote"}/>
      <Button handleClick={()=>{
        const copy = [...points];
        copy[selected]+=1;
        setPoints(copy);
      }} text={"vote"}/>
    </div>
    <div>
      <h1>Anecdote with most votes</h1>
      <MostVoted points={points} anecdotes={props.anecdotes} selected={selected}/>
    </div>
    </React.Fragment>
  )
};

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);