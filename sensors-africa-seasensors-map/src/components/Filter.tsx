import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1,
    position: 'absolute',
    width: '10rem',
    lineHeight: '15px',
    marginTop: '10rem',
    marginLeft: '4rem',
    marginBottom: '4rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    overflow: 'scroll',
    backgroundColor: 'white'
  },
  header: {
    display: 'inline-block',
    height: '3rem',
    width: '100%',
    backgroundColor: '#4a345a',
    color: 'white',
    padding: ' 0.5rem'
  },
  filterGroup: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    '& input[type="checkbox"]': {
      appearance: 'radio',
      marginBottom: '10px'
    }
  },
  filterTitle: {
    color: 'grey'
  },
  filterLabel: {
    display: 'flex',
    alignItems: 'baseline',
    color: 'grey'
  }
}));

interface Props {}

export default function Filter({  }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Filters</h2>
      </div>
      <div className={classes.filterGroup}>
        <h4 className={classes.filterTitle}>Tide</h4>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Tide" value="Spring" />
          Spring
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Tide" value="Normal" />
          Normal
        </label>
        <h4 className={classes.filterTitle}>Tidal state</h4>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Tidal State" value="Falling" />
          Falling
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Tidal State" value="High" />
          High
        </label>
        <h4 className={classes.filterTitle}>Time of Day</h4>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Time of Day" value="AM" />
          AM
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Time of Day" value="PM" />
          PM
        </label>
        <h4 className={classes.filterTitle}>Day</h4>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Monday" />
          Monday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Tuesday" />
          Tuesday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Wednesday" />
          Wednesday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Tuesday" />
          Thursday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Friday" />
          Friday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Saturday" />
          Saturday
        </label>
        <label className={classes.filterLabel}>
          <input type="checkbox" name="Day" value="Sunday" />
          Sunday
        </label>
      </div>
    </div>
  );
}
