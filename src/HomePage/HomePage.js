import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

import formatLink from '../utils/utils'
import { genres, decades } from '../../emuns'
import TrackView from '../TrackView/TrackView'
import styles from './HomePage.styles'

export const HomePage = ({ classes }) => {
  const [genre, setGenre] = useState(genres[0].value)
  const [decade, setDecade] = useState(decades[0].value)
  const [tracks, setTracks] = useState([])
  const [isLoading, setLoading] = useState(false)

  const submitForm = e => {
    e.preventDefault()
    setLoading(true)

    axios({
      method: 'GET',
      url: `${process.env.API_URL}/api/spotify`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      params: {
        genre,
        decade
      }
    })
      .then(res => {
        setTracks([
          {
            title: res.data.name,
            artist: res.data.artists[0].name,
            link: formatLink(res.data.name, res.data.artists[0].name)
          },
          ...tracks
        ])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.titleCard}>
        <Typography
          id="header"
          variant="headline"
          component="h1"
          className={classes.title}
        >
          The Playing Possum
        </Typography>

        <form className={classes.form} onSubmit={e => submitForm(e)}>
          <FormControl className={classes.select}>
            <InputLabel id="select-label-genre" htmlFor="genre-select">
              Genre
            </InputLabel>
            <Select
              id="genre-select"
              value={genre}
              onChange={e => setGenre(e.target.value)}
              inputProps={{
                name: 'genre',
                id: 'genre-select'
              }}
            >
              {genres.map(g => (
                <MenuItem key={g.value} value={g.value}>
                  {g.display}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.select}>
            <InputLabel id="select-label-decade" htmlFor="decade-select">
              Decade
            </InputLabel>
            <Select
              id="decade-select"
              value={decade}
              onChange={e => setDecade(e.target.value)}
              inputProps={{
                name: 'decade',
                id: 'decade-select'
              }}
            >
              {decades.map(d => (
                <MenuItem key={d.value} value={d.value}>
                  {d.display}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            id="submit-button"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={isLoading}
          >
            Submit
          </Button>
        </form>
      </Paper>
      {tracks.map(track => (
        <TrackView key={`track-view-${track.trackTitle}`} track={track} />
      ))}
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
