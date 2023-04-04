// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    this.setState(() => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    let counterType
    if (count % 2 === 0) {
      counterType = 'Even'
    } else {
      counterType = 'Odd'
    }

    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd">Count is {counterType}</p>
          <button
            type="button"
            className="increment-btn"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="hint">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
