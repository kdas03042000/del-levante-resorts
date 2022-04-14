import { makeStyles } from "@material-ui/core/styles";

export const useLandingPageStyles = makeStyles((theme) => ({
  root: (props: any) => ({
    backgroundImage: `url(${props.MainResortImage})`,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  greetings: {
    color: theme.palette.common.white,
    fontFamily: `'Lobster', 'sans-serif'`,
  }
}));