export default theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '48px'
  },
  titleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '32px',
    padding: '16px',
    width: '80%',
    height: '120px',
    border: '1px solid #00ffd5',
    backgroundColor: '#98969a'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center'
  },
  select: {
    margin: theme.spacing.unit * 2,
    width: '240px'
  },
  button: {
    fontWeight: '600',
    width: '180px',
    letterSpacing: '1px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit * 2,
    width: '240px'
  }
})
