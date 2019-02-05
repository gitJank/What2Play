import { React, expect, shallow } from '../specHelper'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  let wrap

  beforeEach(() => {
    const defaultProps = {
      classes: {}
    }

    wrap = (props = defaultProps) => shallow(<HomePage {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('handles form change', () => {
    const wrapper = wrap()
    const target = { target: { name: 'testName', value: 'test value' } }

    wrapper.instance().handleFormChange(target)

    expect(wrapper.state().testName).to.equal('test value')
  })

  it('formats links', () => {
    const wrapper = wrap()

    const track = { title: 'track - (title)', artist: 'artist name' }

    const link = wrapper.instance().formatLink(track.title, track.artist)

    expect(link).to.equal(
      'https://www.ultimate-guitar.com/search.php?search_type=title&value=track%20by%20artist%20name'
    )
  })

  it('displays The Playing Possum', () => {
    const wrapper = wrap()

    expect(wrapper.find('#header').prop('children')).to.equal(
      'The Playing Possum'
    )
  })

  it('displays a select with label Genre', () => {
    const wrapper = wrap()

    expect(wrapper.find('#select-label-genre').prop('children')).to.equal(
      'Genre'
    )
  })

  it('displays the Genre select with the correct options', () => {
    const wrapper = wrap()

    const menuItems = wrapper
      .find('#genre-select')
      .prop('children')
      .map(item => {
        return item.props
      })

    const findMenuItem = value => {
      return menuItems.find(item => {
        return item.value === value
      })
    }

    expect(findMenuItem('rock')).to.eql({ value: 'rock', children: 'Rock' })

    expect(findMenuItem('country')).to.eql({
      value: 'country',
      children: 'Country'
    })

    expect(findMenuItem('metal/hard rock')).to.eql({
      value: 'metal/hard rock',
      children: 'Metal and Hard Rock'
    })

    expect(findMenuItem('blues')).to.eql({ value: 'blues', children: 'Blues' })

    expect(findMenuItem('folk')).to.eql({ value: 'folk', children: 'Folk' })
  })

  it('displays a select with label Decade', () => {
    const wrapper = wrap()

    expect(wrapper.find('#select-label-decade').prop('children')).to.equal(
      'Decade'
    )
  })

  it('displays the Decade select with the correct options', () => {
    const wrapper = wrap()

    const menuItems = wrapper
      .find('#decade-select')
      .prop('children')
      .map(item => {
        return item.props
      })

    const findMenuItem = value => {
      return menuItems.find(item => {
        return item.value === value
      })
    }

    expect(findMenuItem('70`s')).to.eql({ value: '70`s', children: '70`s' })

    expect(findMenuItem('80`s')).to.eql({ value: '80`s', children: '80`s' })

    expect(findMenuItem('90`s')).to.eql({ value: '90`s', children: '90`s' })

    expect(findMenuItem('00`s')).to.eql({ value: '00`s', children: '00`s' })

    expect(findMenuItem('10`s')).to.eql({ value: '10`s', children: '10`s' })
  })

  it('displays a button with text Submit', () => {
    const wrapper = wrap()

    expect(wrapper.find('#submit-button').prop('children')).to.equal('Submit')
  })
})
