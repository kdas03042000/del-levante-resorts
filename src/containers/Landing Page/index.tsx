import { Typography, Grid } from '@material-ui/core';
import moment from 'moment';
import MainResortImage from 'assets/images/resort-1.jpg';
import AnimatedScrollDown from 'components/AnimatedScrollDown';
import { useLandingPageStyles } from './styles';

const LandingPage = () => {
  const classes = useLandingPageStyles({ image: MainResortImage });

  const getGreetingText = () => {
    const hour = moment().hour();
    if (hour >= 0 && hour < 12)
      return (
        <Typography variant="h1" className={classes.greetings}>
          Good Morning!
        </Typography>
      );
    if (hour >= 12 && hour < 16)
      return (
        <Typography variant="h1" className={classes.greetings}>
          Good Afternoon!
        </Typography>
      );
    return (
      <Typography variant="h1" className={classes.greetings}>
        Good Evening!
      </Typography>
    );
  };

  const getCompanyName = () => (
    <>
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
      >
        <Typography variant="h1" className={`${classes.companyName}`}>
          Del-Levante Resorts
        </Typography>
      </Grid>
      <Grid container justifyContent="center" item xs={12}>
        <Typography variant="h3" className={classes.companyName}>
          welcomes you
        </Typography>
      </Grid>
    </>
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container justifyContent="center" item xs={12}>
          {getGreetingText()}
        </Grid>
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          className={classes.companyNameRoot}
        >
          {getCompanyName()}
        </Grid>
      </Grid>
      <div className={classes.scrollDownContainer}>
        <AnimatedScrollDown />
      </div>
    </div>
  );
};

export default LandingPage;
