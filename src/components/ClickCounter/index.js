// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="App-container">
        <div className="main-container">
          <h1 className="Para">
            The Button has been clicked <br />{' '}
            <span className="count">{count} </span>
            times
          </h1>
          <p className="para1">Click the button to increase the count!</p>

          <button onClick={this.onIncrement} type="button" className="btn">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
