// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>Count: {count}</div>
    </>
  )
}

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  render(<Counter />)

  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const count = screen.getByText(/count/i)
  expect(count).toHaveTextContent(/count: 0/i)

  userEvent.click(increment)
  expect(count).toHaveTextContent(/count: 1/i)
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
})

/* eslint no-unused-vars:0 */
