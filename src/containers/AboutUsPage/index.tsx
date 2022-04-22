import React from 'react';
import ParticlesBackground from 'components/ParticlesBackground';
import { useAboutUsPageStyles } from './styles';

const AboutUsPage = () => {
    const classes = useAboutUsPageStyles();

    return <div className={classes.root}><ParticlesBackground /></div>;
};

export default React.memo(AboutUsPage);
