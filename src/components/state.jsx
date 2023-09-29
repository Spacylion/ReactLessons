import { Component } from "react"

class CounterButton extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state

    return (
      <>
        <div>{counter}</div>
        <button onClick={this.handleClick}>добавить +1</button>
      </>
    )
  }
}

export default CounterButton
