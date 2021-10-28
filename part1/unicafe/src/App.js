import React, { useState } from 'react'

const Header = ({title}) => {
  return <h1>{title}</h1>
}
const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}
const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </>
  )
}
const Statistics = ({data}) => {
  const [good, neutral, bad] = data
  const scores = (bad*-1 + good) / (good+neutral+bad)

  if (Number.isNaN(scores)) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={good+neutral+bad} />
      <StatisticsLine text="average" value={scores} />
      <StatisticsLine text="positive" value={good/(good+neutral+bad)*100 +"%"} />
      </table>
    </>
  )}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleBad = () => setBad(bad+1)
  const handleNeutral = () => setNeutral(neutral+1)

  return (
    <div>
      <Header title="Give feedback" />
      <Button onClick={handleGood} text="Good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <Statistics data={[good, neutral, bad]}/>
    </div>
  )
}

export default App