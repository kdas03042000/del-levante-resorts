import React from 'react';
import ParallaxResort from 'images/resort-2.jpg';
import useParallaxPageStyles from './styles';
const ParallaxPage = () => {
    const classes = useParallaxPageStyles({ image: ParallaxResort });
  return <div className={classes.root}></div>;
};

export default React.memo(ParallaxPage);
