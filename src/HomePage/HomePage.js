import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '48px',
    fontWeight: 'normal'
  },
  titleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    marginTop: '32px',
    border: `4px solid ${theme.palette.primary.main}`,
    width: '520px',
    height: '240px',
    background: theme.palette.secondary.main
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const HomePage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.titleCard}>
        <h1 className={classes.title}>What 2 Play</h1>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
