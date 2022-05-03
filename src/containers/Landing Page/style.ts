import { makeStyles } from '@material-ui/styles';

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
  adventureText: {
    marginTop: '5rem',
    textTransform: 'uppercase',
    fontSize: '7rem',
    fontWeight: 600,
  },
  secondaryAdventureText: {
    fontSize: '2rem',
    marginTop: '-2rem',
  },
  worthy: {
    fontFamily: `'Gwendolyn', 'sans-serif'`,
    fontSize: '3rem',
  },
  companyName: {
    fontSize: '5rem',
    fontWeight: 700,
    marginTop: '4rem',
    fontFamily: `'Gwendolyn', 'sans-serif'`,
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
}));
