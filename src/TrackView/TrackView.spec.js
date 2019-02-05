import { React, expect, shallow } from '../specHelper'
import { TrackView } from './TrackView'

describe('TrackView', () => {
  let wrap
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      track: {
        title: 'test title',
        artist: 'test artist',
        link: 'https://www.test.com'
      },
      classes: {}
    }

    wrap = (props = defaultProps) => shallow(<TrackView {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('displays the tracks title', () => {
    const wrapper = wrap()

    expect(wrapper.find('#track-title').prop('children')).to.equal(
      defaultProps.track.title
    )
  })

  it('displays the tracks artist', () => {
    const wrapper = wrap()

    expect(wrapper.find('#track-artist').prop('children')[1]).to.equal(
      defaultProps.track.artist
    )
  })

  it('displays an anchor with text Link To Tabature and an href to the tab', () => {
    const wrapper = wrap()

    expect(wrapper.find('#link-to-tab').prop('children')).to.equal(
      'Link To Tabature'
    )
    expect(wrapper.find('#link-to-tab').prop('href')).to.equal(
      defaultProps.track.link
    )
  })
})
