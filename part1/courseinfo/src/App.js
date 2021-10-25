import React from 'react'



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part info={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part info={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part info={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.info}: {props.exercises}</p>
    )
  }
  const Total = (props) => {
    let sum = 0
    for (let i = 0; i < props.parts.length; i++) {
      sum += props.parts[i].exercises;
    }

    return <p>{sum}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App