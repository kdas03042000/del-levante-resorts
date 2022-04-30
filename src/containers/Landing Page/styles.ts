import { makeStyles } from '@material-ui/core/styles';

export const useLandingPageStyles = makeStyles((theme) => ({
  root: (props: any) => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  }),
  greetings: {
    color: theme.palette.common.white,
    fontFamily: `'Lobster', 'sans-serif'`,
  },
  companyNameRoot: {
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    transform: `translateY(10rem)`,
    opacity: 0,
    background: `linear-gradient(to right,#00F260,#F79D00,#0575E6,#64F38C)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '300%',
    backgroundPosition: '-100%',
    animation: `$animatedCompanyText1 2s 1s ease-in-out forwards, $animatedCompanyName 5s infinite alternate-reverse`,
  },
  companyName: {
    fontWeight: 900,
    letterSpacing: '1rem',
    fontFamily: `'Roboto', 'sans-serif'`,
  },
  scrollDownContainer: {
    position: 'absolute',
    zIndex: 5,
    left: '50%',
    bottom: '15%',
    opacity: 0,
    animation: `$scrollDownContainerAnimation 1s 3.5s forwards`,
  },
  video: {
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
  },

  '@keyframes animatedCompanyName': {
    to: {
      backgroundPosition: '100%',
    },
  },
  '@keyframes animatedCompanyText1': {
    '0%': {
      opacity: 0,
      transform: `translateY(10rem)`,
    },
    '100%': {
      opacity: 1,
      transform: `translateY(0)`,
    },
  },
  '@keyframes scrollDownContainerAnimation': {
    to: {
      opacity: 1,
    },
  },
}));
