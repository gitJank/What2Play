const { playlistIds } = require('../../../emuns')

const getPlaylistId = (genre, decade) => {
  return playlistIds[decade][genre]
}

const getRandomTrack = items => {
  return items[Math.floor(Math.random() * items.length)].track
}

module.exports = { getPlaylistId, getRandomTrack }
