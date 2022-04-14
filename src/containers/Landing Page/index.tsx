import { Typography } from '@material-ui/core';
import moment from 'moment';
import MainResortImage from 'images/resort-1.jpg';
import { useLandingPageStyles } from './styles';

const LandingPage = () => {
  const classes = useLandingPageStyles({ MainResortImage });

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

  return <div className={classes.root}>{getGreetingText()}</div>;
};

export default LandingPage;
