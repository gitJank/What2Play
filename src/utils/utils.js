const formatLink = (trackTitle, artistName) => {
  const splitTrack = trackTitle.split(' - ')[0].split(' (')[0]

  const formattedValue = [splitTrack, artistName]
    .join(' by ')
    .toLowerCase()
    .replace(/ /g, '%20')

  return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${formattedValue}`
}

export default formatLink
