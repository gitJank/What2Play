const router = require('express').Router()
const controller = require('./spotifyController')

router.route('/').get(controller.get)

module.exports = router
