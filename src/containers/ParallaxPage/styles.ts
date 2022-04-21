import { makeStyles } from '@material-ui/styles';

const useParallaxPageStyles = makeStyles((theme) => ({
  root: (props: any) => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '50%',
  }),
}));

export default useParallaxPageStyles;
