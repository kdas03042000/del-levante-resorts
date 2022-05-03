import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { PlayCircleFilled as ExploreIcon } from '@material-ui/icons';
// import moment from 'moment';
import MainResortImage from 'assets/images/resort-1.jpg';
import video_1 from 'assets/videos/video-1.mp4';
import video_2 from 'assets/videos/video-2.mp4';
import video_3 from 'assets/videos/video-3.mp4';
// import AnimatedScrollDown from 'components/AnimatedScrollDown';
import { useLandingPageStyles } from './styles';
import { useStyles } from './style';

const videoSourceArray = [video_1, video_2, video_3];

const LandingPage = () => {
  // const classes = useLandingPageStyles({ image: MainResortImage });
  const classes1 = useStyles();

  const [videoSource, setVideoSource] = React.useState(
    videoSourceArray[Math.floor(Math.random() * videoSourceArray.length)],
  );

  React.useEffect(() => {
    setVideoSource(
      videoSourceArray[Math.floor(Math.random() * videoSourceArray.length)],
    );
  }, []);

  // const getGreetingText = () => {
  //   const hour = moment().hour();
  //   if (hour >= 0 && hour < 12)
  //     return (
  //       <Typography variant="h1" className={classes.greetings}>
  //         Good Morning!
  //       </Typography>
  //     );
  //   if (hour >= 12 && hour < 16)
  //     return (
  //       <Typography variant="h1" className={classes.greetings}>
  //         Good Afternoon!
  //       </Typography>
  //     );
  //   return (
  //     <Typography variant="h1" className={classes.greetings}>
  //       Good Evening!
  //     </Typography>
  //   );
  // };

  // const getCompanyName = () => (
  //   <>
  //     <Grid
  //       container
  //       justifyContent="center"
  //       item
  //       xs={12}
  //     >
  //       <Typography variant="h1" className={`${classes.companyName}`}>
  //         Del-Levante Resorts
  //       </Typography>
  //     </Grid>
  //     <Grid container justifyContent="center" item xs={12}>
  //       <Typography variant="h3" className={classes.companyName}>
  //         welcomes you
  //       </Typography>
  //     </Grid>
  //   </>
  // );

  // return (
  //   <div className={classes.root}>
  //     <Grid container>
  //       <Grid container justifyContent="center" item xs={12}>
  //         {getGreetingText()}
  //       </Grid>
  //       <Grid
  //         container
  //         justifyContent="center"
  //         item
  //         xs={12}
  //         className={classes.companyNameRoot}
  //       >
  //         {getCompanyName()}
  //       </Grid>
  //     </Grid>
  //     <div className={classes.scrollDownContainer}>
  //       <AnimatedScrollDown />
  //     </div>
  //   </div>
  // );

  return (
    <div className={classes1.root}>
      <video
        src={videoSource}
        className={classes1.backgroundVideo}
        loop
        autoPlay
        muted
      ></video>
      <div className={classes1.contentOnTop}>
        <div className={classes1.introductoryDiv}>
          <Typography className={classes1.companyName}>Del-Levante</Typography>
          <Typography className={classes1.adventureText}>
            Adventure Awaits
          </Typography>
          <Typography className={classes1.secondaryAdventureText}>
            those who are <span className={classes1.worthy}>worthy</span>
          </Typography>
          <Grid
            container
            spacing={0}
            className={classes1.actionButtonContainer}
          >
            <Grid item xs={6} className={classes1.actionButtons}>
              <Button className={classes1.getStartedButton}>Get Started</Button>
            </Grid>
            <Grid item xs={6} className={classes1.actionButtons}>
              <Button className={classes1.exploreButton}>
                Explore
                <ExploreIcon className={classes1.exploreIcon} />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
