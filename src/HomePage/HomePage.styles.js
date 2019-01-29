export default theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '48px'
  },
  titleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    marginTop: '32px',
    width: '80%',
    border: `4px solid ${theme.palette.primary.main}`,
    height: '120px',
    background: theme.palette.secondary.main
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
