import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1,
    flexGrow: 1,
    position: 'absolute',
    top: '3rem',
    right: '2rem',
    width: '24rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  label: {
    color: '#010c14',
    marginLeft: '0.4rem'
  },
  sensorNumber: {
    color: '#4a345a'
  },
  blastsNumber: {
    color: '#053354'
  }
}));

interface Props {
  numberOfSensors: number;
  numberOfBlasts: number;
}

export default function Counter({ numberOfSensors, numberOfBlasts }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.sensorNumber}>{numberOfSensors}</h1>
        <p className={classes.label}>Blast sensors</p>
      </div>

      <div className={classes.container}>
        <h1 className={classes.blastsNumber}>{numberOfBlasts}</h1>
        <p className={classes.label}>Blast detected</p>
      </div>
    </div>
  );
}
