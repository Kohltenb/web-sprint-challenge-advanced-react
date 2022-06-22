// Write your tests here
import React from "react"
import { render, fireEvent, screen} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'
import AppFunctional from './AppFunctional'

// const testFunc = {
//   currentIndex: 1,
//   currentMoves: 5
// }

test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', async () => {
  render(<AppFunctional />)
})


// test('renders 0 on screen at start', () => {
//   render(<AppFunctional />)
//   const moves = screen.getByDisplayValue(0)
//   expect(moves).toBeInTheDocument()  
// })

// test('current moves starts at zero', () => {
//   render(<AppFunctional />)
//   expect(0).toBeInTheDocument()
// })

// test('the left button works', () => {
//   render(<AppFunctional />)
//   const leftButton = screen.getByTestId("left")
//   userEvent.click(leftButton)
//   expect(1).toBeInTheDocument()
// } )
