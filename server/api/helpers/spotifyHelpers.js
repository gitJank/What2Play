const { genres, decades, playlistIds } = require('../../../emuns')

const getPlaylistId = (genre, decade) => {
  switch (true) {
    // 60's
    case decade === decades.SIXTIES && genre === genres.ROCK:
      return playlistIds.SIXTIES.ROCK
    case decade === decades.SIXTIES && genre === genres.HARD_ROCK:
      return playlistIds.SIXTIES.HARD_ROCK
    case decade === decades.SIXTIES && genre === genres.BLUES:
      return playlistIds.SIXTIES.HARD_ROCK
    case decade === decades.SIXTIES && genre === genres.COUNTRY:
      return playlistIds.SIXTIES.COUNTRY
    case decade === decades.SIXTIES && genre === genres.FOLK:
      return playlistIds.SIXTIES.FOLK

    // 70's
    case decade === decades.SEVENTIES && genre === genres.ROCK:
      return playlistIds.SEVENTIES.ROCK
    case decade === decades.SEVENTIES && genre === genres.HARD_ROCK:
      return playlistIds.SEVENTIES.HARD_ROCK
    case decade === decades.SEVENTIES && genre === genres.BLUES:
      return playlistIds.SEVENTIES.HARD_ROCK
    case decade === decades.SEVENTIES && genre === genres.COUNTRY:
      return playlistIds.SEVENTIES.COUNTRY
    case decade === decades.SEVENTIES && genre === genres.FOLK:
      return playlistIds.SEVENTIES.FOLK

    // 80's
    case decade === decades.EIGHTIES && genre === genres.ROCK:
      return playlistIds.EIGHTIES.ROCK
    case decade === decades.EIGHTIES && genre === genres.HARD_ROCK:
      return playlistIds.EIGHTIES.HARD_ROCK
    case decade === decades.EIGHTIES && genre === genres.BLUES:
      return playlistIds.EIGHTIES.HARD_ROCK
    case decade === decades.EIGHTIES && genre === genres.COUNTRY:
      return playlistIds.EIGHTIES.COUNTRY
    case decade === decades.EIGHTIES && genre === genres.FOLK:
      return playlistIds.EIGHTIES.FOLK

    // 90's
    case decade === decades.NINETIES && genre === genres.ROCK:
      return playlistIds.NINETIES.ROCK
    case decade === decades.NINETIES && genre === genres.HARD_ROCK:
      return playlistIds.NINETIES.HARD_ROCK
    case decade === decades.NINETIES && genre === genres.BLUES:
      return playlistIds.NINETIES.HARD_ROCK
    case decade === decades.NINETIES && genre === genres.COUNTRY:
      return playlistIds.NINETIES.COUNTRY
    case decade === decades.NINETIES && genre === genres.FOLK:
      return playlistIds.NINETIES.FOLK

    // 00's
    case decade === decades.TWOTHOUSANDS && genre === genres.ROCK:
      return playlistIds.TWOTHOUSANDS.ROCK
    case decade === decades.TWOTHOUSANDS && genre === genres.HARD_ROCK:
      return playlistIds.TWOTHOUSANDS.HARD_ROCK
    case decade === decades.TWOTHOUSANDS && genre === genres.BLUES:
      return playlistIds.TWOTHOUSANDS.HARD_ROCK
    case decade === decades.TWOTHOUSANDS && genre === genres.COUNTRY:
      return playlistIds.TWOTHOUSANDS.COUNTRY
    case decade === decades.TWOTHOUSANDS && genre === genres.FOLK:
      return playlistIds.TWOTHOUSANDS.FOLK

    // 10's
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.ROCK:
      return playlistIds.TWOTHOUSANDSTENS.ROCK
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.HARD_ROCK:
      return playlistIds.TWOTHOUSANDSTENS.HARD_ROCK
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.BLUES:
      return playlistIds.TWOTHOUSANDSTENS.HARD_ROCK
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.COUNTRY:
      return playlistIds.TWOTHOUSANDSTENS.COUNTRY
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.FOLK:
      return playlistIds.TWOTHOUSANDSTENS.FOLK

    default:
      return ''
  }
}

const getRandomTrack = playlist => {}

module.exports = { getPlaylistId, getRandomTrack }
