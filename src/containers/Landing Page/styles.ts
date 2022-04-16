import { makeStyles } from '@material-ui/core/styles';

export const useLandingPageStyles = makeStyles((theme) => ({
  root: (props: any) => ({
    backgroundImage: `url(${props.MainResortImage})`,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }),
  greetings: {
    color: theme.palette.common.white,
    fontFamily: `'Lobster', 'sans-serif'`,
  },
  companyName: {
    fontWeight: 900,
    fontStyle: 'italic',
    background: `linear-gradient(to right,#00F260,#F79D00,#0575E6,#64F38C)`,
    // background: `linear-gradient(to right,#FF8B00,#C06832,#814663,#412395,#0200C6)`,
    // background: `linear-gradient(-45deg,#4568dc,#b06ab3)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '300%',
    backgroundPosition: '-100%',
    animation: `$animatedCompanyName 5s infinite alternate-reverse`,
  },

  '@keyframes animatedCompanyName': {
    to: {
      backgroundPosition: '100%',
    },
  },
}));
