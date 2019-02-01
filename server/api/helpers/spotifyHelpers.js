const { genres, decades, playlistIds } = require('../../../emuns')

const getPlaylistId = (genre, decade) => {
  switch (true) {
    // 70's
    case decade === decades.SEVENTIES && genre === genres.ROCK:
      return playlistIds.SEVENTIES.ROCK
    case decade === decades.SEVENTIES && genre === genres.METAL_HARDROCK:
      return playlistIds.SEVENTIES.METAL_HARDROCK
    case decade === decades.SEVENTIES && genre === genres.BLUES:
      return playlistIds.SEVENTIES.BLUES
    case decade === decades.SEVENTIES && genre === genres.COUNTRY:
      return playlistIds.SEVENTIES.COUNTRY
    case decade === decades.SEVENTIES && genre === genres.FOLK:
      return playlistIds.SEVENTIES.FOLK

    // 80's
    case decade === decades.EIGHTIES && genre === genres.ROCK:
      return playlistIds.EIGHTIES.ROCK
    case decade === decades.EIGHTIES && genre === genres.METAL_HARDROCK:
      return playlistIds.EIGHTIES.METAL_HARDROCK
    case decade === decades.EIGHTIES && genre === genres.BLUES:
      return playlistIds.EIGHTIES.BLUES
    case decade === decades.EIGHTIES && genre === genres.COUNTRY:
      return playlistIds.EIGHTIES.COUNTRY
    case decade === decades.EIGHTIES && genre === genres.FOLK:
      return playlistIds.EIGHTIES.FOLK

    // 90's
    case decade === decades.NINETIES && genre === genres.ROCK:
      return playlistIds.NINETIES.ROCK
    case decade === decades.NINETIES && genre === genres.METAL_HARDROCK:
      return playlistIds.NINETIES.METAL_HARDROCK
    case decade === decades.NINETIES && genre === genres.BLUES:
      return playlistIds.NINETIES.BLUES
    case decade === decades.NINETIES && genre === genres.COUNTRY:
      return playlistIds.NINETIES.COUNTRY
    case decade === decades.NINETIES && genre === genres.FOLK:
      return playlistIds.NINETIES.FOLK

    // 00's
    case decade === decades.TWOTHOUSANDS && genre === genres.ROCK:
      return playlistIds.TWOTHOUSANDS.ROCK
    case decade === decades.TWOTHOUSANDS && genre === genres.METAL_HARDROCK:
      return playlistIds.TWOTHOUSANDS.METAL_HARDROCK
    case decade === decades.TWOTHOUSANDS && genre === genres.BLUES:
      return playlistIds.TWOTHOUSANDS.BLUES
    case decade === decades.TWOTHOUSANDS && genre === genres.COUNTRY:
      return playlistIds.TWOTHOUSANDS.COUNTRY
    case decade === decades.TWOTHOUSANDS && genre === genres.FOLK:
      return playlistIds.TWOTHOUSANDS.FOLK

    // 10's
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.ROCK:
      return playlistIds.TWOTHOUSANDSTENS.ROCK
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.METAL_HARDROCK:
      return playlistIds.TWOTHOUSANDSTENS.METAL_HARDROCK
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.BLUES:
      return playlistIds.TWOTHOUSANDSTENS.BLUES
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.COUNTRY:
      return playlistIds.TWOTHOUSANDSTENS.COUNTRY
    case decade === decades.TWOTHOUSANDSTENS && genre === genres.FOLK:
      return playlistIds.TWOTHOUSANDSTENS.FOLK

    default:
      return ''
  }
}

const getRandomTrack = items => {
  return items[Math.floor(Math.random() * items.length)].track
}

module.exports = { getPlaylistId, getRandomTrack }
