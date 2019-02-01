export default theme => ({
  trackContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '32px',
    padding: '16px',
    width: '80%',
    height: 'auto',
    border: '1px solid #00ffd5',
    backgroundColor: '#98969a'
  },
  trackTitle: {
    margin: '0px',
    fontSize: '28px',
    color: theme.palette.primary.main
  },
  trackArtist: {
    margin: '0px 0px 4px 0px',
    color: theme.palette.primary.main
  }
})
