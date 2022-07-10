import { makeStyles } from '@material-ui/core/styles';

const useAnimatedScrollDownStyles = makeStyles((theme) => ({
  arrow: {
    height: 'auto',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      height: '1.5rem',
      width: '1.5rem',
      borderBottom: '0.2rem solid #fff',
      borderRight: '0.2rem solid #fff',
      margin: '-1rem',
      animation: `$scroll 2s infinite`,
    },
    '& > *:nth-child(2)': {
      animationDelay: '-0.2s',
    },
    '& > *:nth-child(3)': {
      animationDelay: '-0.4s',
    },
  },

  '@keyframes scroll': {
    '0%': {
      opacity: 0,
      transform: `rotate(45deg) translate(-1rem, -1rem)`,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
      transform: `rotate(45deg) translate(2.5rem, 2.5rem)`,
    },
  },
}));

export default useAnimatedScrollDownStyles;
