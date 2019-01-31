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
import styles from './HomePage.styles'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genre: genres.ROCK,
      decade: decades.NINETIES,
      trackTitle: 'Placeholder',
      isLoading: false
    }
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
        console.log(res)
        this.setState({
          isLoading: false,
          trackTitle: res.data.name,
          artistName: res.data.artists[0].name
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
    const { genre, decade, isLoading, trackTitle, artistName } = this.state
    return (
      <div className={classes.container}>
        <Paper className={classes.titleCard}>
          <Typography
            variant="headline"
            component="h1"
            className={classes.title}
          >
            What 2 Play
          </Typography>
        </Paper>
        <form className={classes.form} onSubmit={e => this.submitForm(e)}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="genre">Genre</InputLabel>
            <Select
              value={genre}
              onChange={this.handleFormChange}
              inputProps={{
                name: 'genre',
                id: 'genre-select'
              }}
            >
              <MenuItem value={genres.ROCK}>Rock</MenuItem>
              <MenuItem value={genres.HARD_ROCK}>Metal</MenuItem>
              <MenuItem value={genres.COUNTRY}>Country</MenuItem>
              <MenuItem value={genres.BLUES}>Blues</MenuItem>
              <MenuItem value={genres.FOLK}>Folk</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.select}>
            <InputLabel htmlFor="decade">Decade</InputLabel>
            <Select
              value={decade}
              onChange={this.handleFormChange}
              inputProps={{
                name: 'decade',
                id: 'decade-select'
              }}
            >
              <MenuItem value={decades.SIXTIES}>60`s</MenuItem>
              <MenuItem value={decades.SEVENTIES}>70`s</MenuItem>
              <MenuItem value={decades.EIGHTIES}>80`s</MenuItem>
              <MenuItem value={decades.NINETIES}>90`s</MenuItem>
              <MenuItem value={decades.TWOTHOUSANDS}>00`s</MenuItem>
              <MenuItem value={decades.TWOTHOUSANDSTENS}>10`s</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={isLoading}
            >
              Send It
            </Button>
            {isLoading ? (
              <CircularProgress className={classes.progress} />
            ) : null}
          </div>
        </form>
        <span>{trackTitle}</span>
        <span>{artistName}</span>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
