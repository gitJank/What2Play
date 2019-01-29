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

import styles from './HomePage.styles'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genre: 'rock',
      decade: 60,
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

    setTimeout(() => {
      window.location = '/'
    }, 3000)
  }

  render() {
    const { classes } = this.props
    const { genre, decade, isLoading } = this.state
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
        <form
          className={classes.form}
          onSubmit={e => this.submitForm(e, { genre, decade })}
        >
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
              <MenuItem value="rock">Rock</MenuItem>
              <MenuItem value="metal">Metal</MenuItem>
              <MenuItem value="country">Country</MenuItem>
              <MenuItem value="blues">Blues</MenuItem>
              <MenuItem value="folk">Folk</MenuItem>
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
              <MenuItem value={60}>60`s</MenuItem>
              <MenuItem value={70}>70`s</MenuItem>
              <MenuItem value={80}>80`s</MenuItem>
              <MenuItem value={90}>90`s</MenuItem>
              <MenuItem value={0}>00`s</MenuItem>
              <MenuItem value={10}>10`s</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send It
            </Button>
            {isLoading ? (
              <CircularProgress className={classes.progress} />
            ) : null}
          </div>
        </form>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
