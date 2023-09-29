// Lesson.js
import React, { Component } from "react"
import PropTypes from "prop-types"

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

export const Button = () => <button>Simple button</button>

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element,
    child: PropTypes.element,
  }

  static defaultProps = {
    children: null,
    child: null,
  }

  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  render() {
    const { counter } = this.state
    const { children, child } = this.props

    return (
      <div>
        {/* Вывод дочернего компонента */}
        {child}
        <div>{counter}</div>
        {/* Вывод текущего значения счетчика */}
        {React.cloneElement(children, { counter })}
        {/* Кнопка для увеличения счетчика */}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}
