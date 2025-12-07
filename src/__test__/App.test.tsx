import { render } from '@testing-library/react'
import App from '../App'
import { describe, expect, test } from 'vitest'

describe('App', () => {
  test('matches the homepage snapshot', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
