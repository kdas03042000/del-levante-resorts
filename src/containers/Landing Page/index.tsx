import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { PlayCircleFilled as ExploreIcon } from '@material-ui/icons';
// import moment from 'moment';
import MainResortImage from 'assets/images/resort-1.jpg';
import video_2 from 'assets/videos/video-2.mp4';
import video_3 from 'assets/videos/video-3.mp4';
import AnimatedScrollDown from 'components/AnimatedScrollDown';
// import { useLandingPageStyles } from './styles';
import { useStyles } from './style';

const videoSourceArray = [video_2, video_3];

const LandingPage = () => {
  const classes = useStyles();

  const [videoSource] = React.useState(
    videoSourceArray[Math.floor(Math.random() * videoSourceArray.length)],
  );

  const ref = React.useRef<any>(null);
  const companyNameRef = React.useRef<any>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes['companyNameComponent-inView']);
          } else {
            entry.target.classList.remove(
              classes['companyNameComponent-inView'],
            );
          }
        });
      },
      {
        threshold: 1,
        // rootMargin: '100px',
      },
    );
    observer.observe(companyNameRef.current);
  }, []);

  const midSectionText = () => (
    <div className={classes.midSectionTextRoot}>
      <Typography className={classes.mottoText}>
        Manifesting The 
        <div className={classes.luxury}>
          <div>Luxury.</div>
          <div>Dream.</div>
        </div>
      </Typography>
    </div>
  );

  const getButtonContainer = () => (
    <Grid container spacing={0} className={classes.actionButtonContainer}>
      <Grid item xs={6} className={classes.actionButtons}>
        <Button className={classes.getStartedButton}>Get Started</Button>
      </Grid>
      <Grid item xs={6} className={classes.actionButtons}>
        <Button className={classes.exploreButton}>
          Explore
          <ExploreIcon className={classes.exploreIcon} />
        </Button>
      </Grid>
    </Grid>
  );

  const getCompanyNameComponent = () => (
    <div ref={companyNameRef} className={classes.companyNameContainer}>
      <Typography className={classes.companyInitials}>
        <span>D</span>
        <span>L</span>
      </Typography>
      <hr ref={ref} className={classes.hr} />
      <Typography className={classes.companyName}>Del-Levante</Typography>
    </div>
  );

  return (
    <div className={classes.root}>
      <video
        src={videoSource}
        className={classes.backgroundVideo}
        loop
        autoPlay
        muted
      ></video>
      <div className={classes.contentOnTop}>
        <div className={classes.introductoryDiv}>
          {getCompanyNameComponent()}
          {midSectionText()}
          {getButtonContainer()}
        </div>
        <div className={classes.scrollDownContainer}>
          <AnimatedScrollDown />
          <Typography className={classes.discoverText}>DISCOVER</Typography>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
