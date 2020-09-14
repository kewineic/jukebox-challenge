module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jukebox-challenge/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}