// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// Material Core - Styles
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

// Material Core - Icons
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/HighlightOff';

// Components
import Autocomplete from './autocomplete';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    overflow: 'inherit',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    width: '100%'
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Header extends React.Component {
  render() {
    const { classes, autoComplete } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Curated TV and Films
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Autocomplete
                {...{ autoComplete }}
                handleChange={this.props.handleChange}
              />
            </div>
            <div className={classes.grow} />
            {this.props.showFilters ? (
              <IconButton color="inherit" onClick={this.props.toggleFilter}>
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={this.props.toggleFilter}>
                <TuneIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  autoComplete: PropTypes.array.isRequired
};

export default withStyles(styles)(Header);
