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
    // justifyContent: 'center',
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
}));
