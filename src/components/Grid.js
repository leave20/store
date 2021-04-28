import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
} from '@material-ui/core'


const styles= theme => ({
  root:{
    height: '100vh',
    width: '100%',
    padding: `${theme.spacing(3)}px 0`,
    background: '#F7E4D0',
  },
  img1:{
    width: '100%',
    height: '100%',
    background: 'url() center no-repeat',
    backgroundSize: 'cover',
  },
  img2:{
    width: '100%',
    height: '100%',
    background: 'url("https://i.postimg.cc/jdBJ70s9/Foto-de-juan-mendez-en-Pexels-1.jpg") center no-repeat',
    backgroundSize: 'cover',
  },
});


const StyledGrid = ({title, dark, id, classes}) => {
  return(
    <Grid container className={classes.root} id={id}>
      <Grid item lg={7} className={classes.img1}></Grid>
      <Grid item lg={5} alignItems='center' justify='center' direction='column'>
        <Typography
        variant='h2'
        align='center'
        >
          LOREM IPSUM
        </Typography>
        <Typography
          variant='h4'
          align='center'
        >
          LOREM IPSUM
        </Typography>
      </Grid>
      <Grid item lg={5} alignItems='center' justify='center' direction='column'>
        <Typography
          variant='h2'
          align='center'
        >
          LOREM IPSUM
        </Typography>
        <Typography
          variant='h4'
          align='center'
        >
          LOREM IPSUM
        </Typography>
      </Grid>
      <Grid item lg={7} className={classes.img2}></Grid>
    </Grid>
  );
};

export default withStyles(styles)(StyledGrid);