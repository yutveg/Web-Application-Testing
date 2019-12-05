import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('test if display component rendering properly', () => {
    let { getByTestId } = render(<App />)
    getByTestId(/^display$/i)
})

test('test if dashboard component rendering properly', () => {
    let { getByTestId } = render(<App />)
    getByTestId(/dashboard/i)
})

test('test if button components render properly', () => {
    let { getByTestId } = render(<App />)
    getByTestId(/strike-button/i)
    getByTestId(/foul-button/i)
    getByTestId(/ball-button/i)
    getByTestId(/hit-button/i)

})

test('test if display h1s are rendering properly', () => {
    let { getByTestId } = render(<App />)
    getByTestId(/strike-display/i)
    getByTestId(/ball-display/i)
})