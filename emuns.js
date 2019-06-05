const genres = [
  { value: 'ROCK', display: 'Rock' },
  { value: 'COUNTRY', display: 'Country' },
  { value: 'METAL_HARDROCK', display: 'Metal/Hard Rock' },
  { value: 'BLUES', display: 'Blues' },
  { value: 'FOLK', display: 'Folk' }
]

const decades = [
  { value: 'SEVENTIES', display: '70`s' },
  { value: 'EIGHTIES', display: '80`s' },
  { value: 'NINETIES', display: '90`s' },
  { value: 'TWOTHOUSANDS', display: '00`s' },
  { value: 'TWOTHOUSANDSTENS', display: '10`s' }
]

const playlistIds = {
  SEVENTIES: {
    ROCK: '0RG0jz49GQ8BdBSdQKW7mJ',
    COUNTRY: '45Hfw3HxljMovY89F2of1w',
    METAL_HARDROCK: '26TS7zTAoSBZ08DEWavlPt',
    BLUES: '1uUmS4uaUU9W2kYuLLrJTD',
    FOLK: '2CTjNJ5IuZhtz4spyjgJpx'
  },
  EIGHTIES: {
    ROCK: '6MFiuivM0TNNByXeVBUvtz',
    COUNTRY: '69sctJ0acuqqO1dAjcSdBj',
    METAL_HARDROCK: '5IpUo2kdDyRf64brc5i7Zg',
    BLUES: '37i9dQZF1DZ06evO35m9Q4',
    FOLK: '13rHH9sRmOCcQ3MEkomsfv'
  },
  NINETIES: {
    ROCK: '2MTatPQetkXpe9jsBVsIwb',
    COUNTRY: '3W8sIVX1FigsYLh4344d8R',
    METAL_HARDROCK: '479qm5nlGtOkC6NVnaJOAj',
    BLUES: '15iTNkujGLIL8HArJ98S52',
    FOLK: '22MmW4GHIOKfaIFkHjsJT6'
  },
  TWOTHOUSANDS: {
    ROCK: '2TJ92SPDV7cxoETNHKWMOG',
    COUNTRY: '5Xt7yDnCYgxupP1agpFej3',
    METAL_HARDROCK: '6vAsIHXHzE7pLCBNyOSgKz',
    BLUES: '2g0mJJjw2ERoXD7QwaC7Dd',
    FOLK: '5E6ayO3vaA71WhheoDqz42'
  },
  TWOTHOUSANDSTENS: {
    ROCK: '299x7vqsZGoKd5Jr3tEVq5',
    COUNTRY: '4Yct2DwLwSKyFezCjq254c',
    METAL_HARDROCK: '6GKscQCOQhP9mj0clcjSkp',
    BLUES: '2g0mJJjw2ERoXD7QwaC7Dd',
    FOLK: '0XDPmY89Qt0lODSxJa6Wa6'
  }
}

module.exports = { genres, decades, playlistIds }
