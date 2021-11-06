import React from 'react'

const Course = ({course}) => {
    return <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total course={course} />
    </div>
}

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const { parts } = course
    const sum = Object.values(parts).reduce((prev, {exercises}) => prev + exercises, 0)
    
    return(
      <p>
        <strong>Total of {sum} exercises</strong>
      </p>
    ) 
  }
  
  const Content = ({ parts }) => {
    const content = parts.map((singleCourse) => <p key={singleCourse.id}>{singleCourse.name} {singleCourse.exercises}</p>)
  
    return content
  }


export default Course
