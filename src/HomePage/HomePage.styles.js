export default theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '40px',
    textAlign: 'center'
  },
  titleCard: {
    margin: '32px 0px 16px 0px',
    padding: '16px',
    width: '80%',
    minHeight: '120px',
    minWidth: '300px',
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
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  select: {
    margin: theme.spacing.unit * 2,
    width: '240px'
  },
  button: {
    fontWeight: '500',
    width: '180px',
    height: '40px',
    letterSpacing: '1px'
  }
})
