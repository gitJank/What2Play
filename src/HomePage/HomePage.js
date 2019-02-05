import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'

import { genres, decades } from '../../emuns'
import TrackView from '../TrackView/TrackView'
import styles from './HomePage.styles'

export class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genre: genres.ROCK,
      decade: decades.NINETIES,
      isLoading: false
    }
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formatLink = (trackTitle, artistName) => {
    const splitTrack = trackTitle.split(' - ')[0].split(' (')[0]

    const formattedValue = [splitTrack, artistName]
      .join(' by ')
      .toLowerCase()
      .replace(/ /g, '%20')

    return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${formattedValue}`
  }

  submitForm = e => {
    e.preventDefault()
    this.setState({
      isLoading: true
    })

    const { genre, decade } = this.state

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
        this.setState({
          isLoading: false,
          track: {
            title: res.data.name,
            artist: res.data.artists[0].name,
            link: this.formatLink(res.data.name, res.data.artists[0].name)
          }
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoading: false
        })
      })
  }

  render() {
    const { classes } = this.props
    const { genre, decade, isLoading, track } = this.state

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
        </Paper>
        <form className={classes.form} onSubmit={e => this.submitForm(e)}>
          <FormControl className={classes.select}>
            <InputLabel id="select-label-genre" htmlFor="genre">
              Genre
            </InputLabel>
            <Select
              id="genre-select"
              value={genre}
              onChange={this.handleFormChange}
              inputProps={{
                name: 'genre',
                id: 'genre-select'
              }}
            >
              <MenuItem value={genres.ROCK}>Rock</MenuItem>
              <MenuItem value={genres.METAL_HARDROCK}>
                Metal and Hard Rock
              </MenuItem>
              <MenuItem value={genres.COUNTRY}>Country</MenuItem>
              <MenuItem value={genres.BLUES}>Blues</MenuItem>
              <MenuItem value={genres.FOLK}>Folk</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.select}>
            <InputLabel id="select-label-decade" htmlFor="decade">
              Decade
            </InputLabel>
            <Select
              id="decade-select"
              value={decade}
              onChange={this.handleFormChange}
              inputProps={{
                name: 'decade',
                id: 'decade-select'
              }}
            >
              <MenuItem value={decades.SEVENTIES}>70`s</MenuItem>
              <MenuItem value={decades.EIGHTIES}>80`s</MenuItem>
              <MenuItem value={decades.NINETIES}>90`s</MenuItem>
              <MenuItem value={decades.TWOTHOUSANDS}>00`s</MenuItem>
              <MenuItem value={decades.TWOTHOUSANDSTENS}>10`s</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.buttonContainer}>
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
            {isLoading ? (
              <CircularProgress className={classes.progress} />
            ) : null}
          </div>
        </form>
        {track ? <TrackView track={track} /> : null}
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
