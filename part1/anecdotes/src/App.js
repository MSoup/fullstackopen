import React, { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const DisplayQuote = (props) => {
  return <p>{props.text}</p>
}
const DisplayVotes = (props) => {
  return <p>Has {props.text} votes</p>
}
const DisplayLargest = (props) => {
  let votes = Object.entries(props.votes)
  console.log(votes);
  let max = votes[0]
  for (let i = 0; i < votes.length; i++) {
    let index = votes[i]
    if (index[1] > max[1]) {
      max = index;
    }
  }
  return (
    <>
    <p>{props.quotes[max[0]]}</p>
    <p>has {max[1]} votes</p>
    </>
)}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  // generating object that stores votes for each anecdote
  let votesObject = {}
  for (let i = 0; i < anecdotes.length; i++) {
    votesObject[i] = 0;
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(votesObject)


  const handleUpvote = () => {
    let copy = {...votes}
    copy[selected] += 1
    setVote(copy);
  }

  const handleClick = () => {
    let randomChoice = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomChoice)
  }

  return (
    <div>
      <DisplayQuote text={anecdotes[selected]} />
      <DisplayVotes text={votes[selected]} />
      <Button text="Upvote" onClick={handleUpvote} />
      <Button text="Generate Quote" onClick={handleClick} />
      <br />
      <DisplayLargest votes={votes} quotes={anecdotes}/>
    </div>
  )
}

export default App