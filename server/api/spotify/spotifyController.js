const SpotifyWebApi = require('spotify-web-api-node')

const { clientSecret } = require('../../config/config')
const { getPlaylistId } = require('../helpers/spotifyHelpers')

const clientId = '37ff54f48ba446cc9798f85c0ab39db3'

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret
})

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  data => {
    spotifyApi.setAccessToken(data.body.access_token)
  },
  err => {
    console.log('Something went wrong when retrieving an access token', err)
  }
)

exports.get = (req, res) => {
  const { genre, decade } = req.query

  // res.data.tracks.items[0].track.name

  spotifyApi.getPlaylist(getPlaylistId(genre, decade)).then(
    data => {
      if (data.body.tracks) {
        const songs = data.body.tracks.items

        const index = Math.floor(Math.random() * songs.length + 1)

        res.status(200).json(songs[index].track)
      } else {
        res.status(401)
      }
    },
    err => {
      console.log(err)
      return err.status
    }
  )
}
