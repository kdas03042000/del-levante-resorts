import { makeStyles } from '@material-ui/styles';

const pxToRem = (px: number) => `${px / 14}rem`;

export const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  backgroundVideo: {
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
  },
  contentOnTop: {
    position: 'absolute',
    zIndex: 1,
    height: '100vh',
    width: '100%',
    top: 0,
  },
  introductoryDiv: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    '& > *': {
      fontFamily: `'Poppins', 'sans-serif'`,
    },
  },
  companyNameContainer: {
    marginTop: pxToRem(70),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0,
    transition: '1s',
  },
  companyName: {
    fontSize: '5rem',
    fontWeight: 700,
    fontFamily: `'Gwendolyn', 'sans-serif'`,
    // opacity: 0,
  },
  companyInitials: {
    fontFamily: 'serif',
    fontSize: '5rem',
    '& > *': {
      display: 'inline-block',
      // opacity: 0,
    },
  },
  actionButtonContainer: {
    marginTop: '3rem',
    width: '30%',
    '& > *': {
      textAlign: 'center',
      '& > *': {
        width: '100%',
        padding: `0.4rem 0.54rem`,
        height: '4rem',
        borderRadius: 0,
      },
    },
    '&:hover $actionButtons': {
      filter: 'blur(0.2rem)',
    },
    '& $actionButtons:hover': {
      filter: 'blur(0)',
    },
  },
  actionButtons: {
    transition: '0.3s',
  },
  getStartedButton: {
    color: '#fff',
    border: `#fff 0.06rem solid`,
  },
  exploreButton: {
    backgroundColor: '#fff',
    border: `#fff 0.06rem solid`,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  exploreIcon: {
    marginLeft: '0.2rem',
    marginBottom: '0.1rem',
  },
  scrollDownContainer: {
    position: 'absolute',
    zIndex: 5,
    left: '50%',
    bottom: '15%',
    opacity: 0,
    animation: `$scrollDownContainerAnimation 1s 3.5s forwards`,
  },
  discoverText: {
    position: 'absolute',
    top: '5rem',
    right: '-2.3rem',
    color: '#fff',
  },
  hr: {
    width: '1rem',
    margin: '-1rem',
    backgroundColor: '#fff',
    transition: '2s',
    opacity: 0,
    border: '#fff 0.067rem solid',
  },
  midSectionTextRoot: {
    marginTop: '4rem',
  },
  mottoText: {
    fontSize: '5rem',
    fontFamily: `'Poppins', 'sans-serif'`,
    width: pxToRem(1000),
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  luxury: {
    textTransform: 'uppercase',
    color: '#333',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: '42rem',
    overflow: 'hidden',
    paddingLeft: '0.5rem',
    animation: `$openClose 15s ease-in-out infinite`,
  },
  'companyNameComponent-inView': {
    opacity: 1,
    '& > *:nth-child(1)': {
      '& > *': {
        opacity: 0,
        animation: `$animateCompanyInitials 2s 1s ease forwards`,
      },
      '& > *:nth-child(1)': {
        animationDelay: '1s',
      },
      '& > *:nth-child(2)': {
        animationDelay: '1.5s',
      },
    },
    '& > *:nth-child(2)': {
      opacity: 1,
      transform: 'scaleX(10)',
      transition: '2s',
    },
    '& > *:nth-child(3)': {
      opacity: 0,
      animation: `$animateCompanyInitials 1s 2s ease forwards`,
    },
  },

  '@keyframes openClose': {
    '0%': {
      top: 0,
      width: 0,
    },
    '5%': {
      width: 0,
    },
    '10%': {
      width: pxToRem(500),
    },
    '25%': {
      width: pxToRem(500),
    },
    '30%': {
      width: 0,
    },
    '50%': {
      top: 0,
      width: 0,
    },
    '55%': {
      width: '0',
      top: '-7.5rem',
    },
    '60%': {
      width: '0',
      top: '-7.5rem',
    },
    '65%': {
      width: pxToRem(500),
      top: '-7.5rem',
    },
    '85%': {
      width: pxToRem(500),
      top: '-7.5rem',
    },
    '90%': {
      top: '-7.5rem',
      width: 0,
    },
    '100%': {
      width: 0,
      top: 0,
    },
  },

  '@keyframes scrollDownContainerAnimation': {
    to: {
      opacity: 1,
    },
  },

  '@keyframes animateCompanyInitials': {
    '0%': {
      opacity: 0,
      transform: 'translateY(1rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
}));
