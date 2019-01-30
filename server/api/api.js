const router = require('express').Router()

router.use('/spotify', require('./spotify/spotifyRoutes'))

module.exports = router
