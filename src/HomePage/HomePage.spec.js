import React from 'react'
// import { expect } from 'jest'
import { render } from '@testing-library/react'

import { HomePage } from './HomePage'

describe('HomePage', () => {
  let contain

  beforeEach(() => {
    const defaultProps = {
      classes: {}
    }

    contain = (props = defaultProps) => render(<HomePage {...props} />)
  })

  it('renders', () => {
    contain()
  })

  it('displays The Playing Possum', () => {
    const { getByText } = contain()

    expect(getByText('The Playing Possum')).toBeTruthy
  })

  it.only('displays a select with label Genre', () => {
    const { getByLabelText } = contain()

    expect(getByLabelText('Genre')).toBeTruthy
  })

  it('displays a select with label Decade', () => {
    const { getByLabelText } = contain()

    expect(getByLabelText('Decade')).toBeTruthy
  })
})
