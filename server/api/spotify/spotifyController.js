const SpotifyWebApi = require('spotify-web-api-node')

const { clientSecret } = require('../../config/config')
const { getPlaylistId, getRandomTrack } = require('../helpers/spotifyHelpers')

const clientId = '37ff54f48ba446cc9798f85c0ab39db3'

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret
})

// Retrieve an access token.
spotifyApi
  .clientCredentialsGrant()
  .then(
    data => {
      spotifyApi.setAccessToken(data.body.access_token)
    },
    err => {
      console.log('Something went wrong when retrieving an access token', err)
    }
  )
  .catch(err => {
    console.log(err)
  })

exports.get = (req, res) => {
  const { genre, decade } = req.query

  spotifyApi
    .getPlaylist(getPlaylistId(genre, decade))
    .then(
      data => {
        if (!data.body.tracks) return res.status(401)

        return res.status(200).json(getRandomTrack(data.body.tracks.items))
      },
      err => {
        return err.status
      }
    )
    .catch(err => {
      console.log(err)
    })
}
