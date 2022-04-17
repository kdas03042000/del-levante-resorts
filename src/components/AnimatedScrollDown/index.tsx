import React from 'react';
import { Grid } from "@material-ui/core";
import useAnimatedScrollDownStyles from './styles';

const AnimatedScrollDown = () => {
    const classes = useAnimatedScrollDownStyles();
    return (
      <Grid container className={classes.arrow}>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    );
};

export default React.memo(AnimatedScrollDown);