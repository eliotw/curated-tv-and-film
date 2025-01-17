// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    top: '54px',
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    },
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    top: '60px'
  },
  filterBar: {
    zIndex: 1
  }
});

class FilterBar extends React.Component {
  render() {
    const { classes, years } = this.props;

    let genres = [
      'All',
      'Action',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Drama',
      'Family',
      'Fantasy',
      'History',
      'Horror',
      'Mystery',
      'Romance',
      'Sci-Fi',
      'Thriller'
    ];
    let genreOptions = genres.map((genre, idx) => (
      <MenuItem key={idx} value={genre}>
        {genre}
      </MenuItem>
    ));

    let orders = ['Ascending', 'Descending'];
    let orderOptions = orders.map((order, idx) => (
      <MenuItem key={idx} value={order}>
        {order}
      </MenuItem>
    ));

    let yearOptions = years.map((year, idx) => (
      <MenuItem key={idx} value={year}>
        {year}
      </MenuItem>
    ));

    return (
      <div className={classes.root}>
        <Collapse in={this.props.showFilters}>
          <AppBar
            position="relative"
            color="secondary"
            className={classes.filterBar}
          >
            <Toolbar>
              <form autoComplete="off">
                <FormControl
                  component="fieldset"
                  margin="dense"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Filter</FormLabel>
                  <RadioGroup
                    aria-label="Filter"
                    name="filter"
                    className={classes.group}
                    value={this.props.filterResults}
                    onChange={this.props.handleFilter}
                    row
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio color="primary" />}
                      label="All"
                    />
                    <FormControlLabel
                      value="movies"
                      control={<Radio color="primary" />}
                      label="Movies"
                    />
                    <FormControlLabel
                      value="tv"
                      control={<Radio color="primary" />}
                      label="TV"
                    />
                  </RadioGroup>
                </FormControl>
                {this.props.filterResults === 'movies' ? (
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="filterYear">Year</InputLabel>
                    <Select
                      value={this.props.filterYear}
                      onChange={this.props.handleYear}
                      inputProps={{
                        name: 'year',
                        id: 'filterYear'
                      }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      {yearOptions}
                    </Select>
                  </FormControl>
                ) : null}
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="filterGenre">Genre</InputLabel>
                  <Select
                    value={this.props.filterGenre}
                    onChange={this.props.handleGenre}
                    inputProps={{
                      name: 'genre',
                      id: 'filterGenre'
                    }}
                  >
                    {genreOptions}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="filterOrder">Sort</InputLabel>
                  <Select
                    value={this.props.filterOrder}
                    onChange={this.props.handleOrder}
                    inputProps={{
                      name: 'order',
                      id: 'filterOrder'
                    }}
                  >
                    {orderOptions}
                  </Select>
                </FormControl>
              </form>
            </Toolbar>
          </AppBar>
        </Collapse>
      </div>
    );
  }
}

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterBar);
