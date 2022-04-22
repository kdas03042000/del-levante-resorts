import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './particlesConfig';
import useParticlesBackgroundStyles from './styles';

const ParticlesBackground = () => {
  const classes = useParticlesBackgroundStyles();
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      className={classes.root}
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default React.memo(ParticlesBackground);
