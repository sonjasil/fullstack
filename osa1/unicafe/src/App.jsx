import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value, text2 }) => (
  <tr>
    <td>
      {text}
    </td>
    <td>
      {value}
    </td>
    <td>
      {text2}
    </td>
  </tr>
)

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
      <tbody>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.total} />
      <StatisticLine text='average' value={(props.good - props.bad) / props.total} />
      <StatisticLine text='positive' value={(props.good / props.total) * 100} text2='%' />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text = 'bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

    </div>
  )
}

export default App
