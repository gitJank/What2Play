export default theme => ({
  trackContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '16px 0px',
    padding: '16px',
    alignItems: 'baseline',
    width: '80%',
    border: '1px solid #00ffd5',
    backgroundColor: '#98969a'
  },
  trackTitle: {
    margin: '0px 16px 0px 0px',
    fontSize: '28px',
    color: theme.palette.primary.main
  },
  trackArtist: {
    margin: '0px 16px 0px 0px',
    color: theme.palette.primary.main
  }
})
