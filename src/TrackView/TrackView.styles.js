export default theme => ({
  trackContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    marginTop: '32px',
    padding: '16px',
    width: '80%',
    border: `4px solid ${theme.palette.primary.main}`,
    height: '120px',
    background: theme.palette.secondary.main
  },
  trackTitle: {
    margin: '0px',
    fontSize: '28px'
  },
  trackArtist: {
    margin: '0px'
  }
})
