const SpotifyWebApi = require('spotify-web-api-node')

const clientId = '37ff54f48ba446cc9798f85c0ab39db3'
const clientSecret = '41c40faccb764f4cae8e9af9d73eebad'

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret
})

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  data => {
    // eslint-disable-next-line dot-notation
    spotifyApi.setAccessToken(data.body['access_token'])
  },
  err => {
    console.log('Something went wrong when retrieving an access token', err)
  }
)

exports.get = (req, res) => {
  spotifyApi.getPlaylist('5MM1npNlbGpL16JcIFO8LS').then(
    data => {
      res.status(200).json(data.body)
    },
    err => {
      console.log(err)
      return err
    }
  )
}
