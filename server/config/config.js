if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  origin: process.env.ORIGIN,
  port: process.env.PORT || 3000,
  clientSecret: process.env.CLIENT_SECRET
}
