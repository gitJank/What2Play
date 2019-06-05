import formatLink from './utils'

describe('Utils', () => {
  it('formats links', () => {
    const track = { title: 'track - (title)', artist: 'artist name' }

    const link = formatLink(track.title, track.artist)

    expect(link).toEqual(
      'https://www.ultimate-guitar.com/search.php?search_type=title&value=track%20by%20artist%20name'
    )
  })
})
