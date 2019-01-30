const express = require('express')
const path = require('path')
const cors = require('cors')

const { port } = require('./config/config')
const api = require('./api/api')

require('dotenv').config()

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

app.use('/api', api)

app.use('/', express.static(path.join(__dirname, '../dist')))

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

const server = app.listen(port, () => {
  const host = server.address().address

  console.log(`App listening at http://${host}:${port}`)
})

module.exports = server
