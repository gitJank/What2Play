import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import styles from './TrackView.styles'

export const TrackView = ({ track, classes }) => {
  return (
    <Paper className={classes.trackContainer}>
      <Typography
        id="track-title"
        component="h2"
        className={classes.trackTitle}
      >
        {track.title}
      </Typography>
      <Typography
        id="track-artist"
        component="h3"
        className={classes.trackArtist}
      >
        By: {track.artist}
      </Typography>
      <a
        id="link-to-tab"
        target="_blank"
        rel="noopener noreferrer"
        href={track.link}
      >
        Link To Tabature
      </a>
    </Paper>
  )
}

TrackView.propTypes = {
  track: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TrackView)
