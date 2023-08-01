import { useState } from 'react'

const StatisticsLine = ({ text, counter }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{counter}</td>
      </tr>
    </tbody>)
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticsLine text='good' counter={props.good} />
      <StatisticsLine text='neutral' counter={props.neutral} />
      <StatisticsLine text='bad' counter={props.bad} />
      <StatisticsLine text='all' counter={props.total} />
      <StatisticsLine text='average' counter={props.sum / props.total} />
      <StatisticsLine text='positive' counter={props.good / props.total * 100} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, SetSum] = useState(0)


  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    SetSum(sum + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    SetSum(sum - 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />


      <h1>Statistics</h1>
      <Statistics sum={sum} total={total} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App