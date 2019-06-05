import React from 'react'
import { render } from '@testing-library/react'

import { TrackView } from './TrackView'

describe('TrackView', () => {
  let defaultProps
  let contain

  beforeEach(() => {
    defaultProps = {
      track: {
        title: 'test title',
        artist: 'test artist',
        link: 'https://www.test.com'
      },
      classes: {}
    }

    contain = (props = defaultProps) => render(<TrackView {...props} />)
  })

  it('renders', () => {
    contain()
  })

  it('displays the tracks title', () => {
    const { getByText } = contain()

    expect(getByText(defaultProps.track.title)).toBeTruthy
  })

  it('displays the tracks artist', () => {
    const { getByText } = contain()

    expect(getByText(`By: ${defaultProps.track.artist}`)).toBeTruthy
  })

  it('displays an anchor with text Link To Tabature and an href to the tab', () => {
    const { getByText } = contain()

    expect(getByText('Link To Tabature')).toBeTruthy

    expect(getByText('Link To Tabature').getAttribute('href')).toBe(
      defaultProps.track.link
    )
  })
})
