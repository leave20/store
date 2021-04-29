import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
// import newTheme from '../styles/NewTheme'

export default function StyledGrid({ title, dark, id }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id={id} component="section">
      <Grid item lg={7} className={classes.imgContainer}>
        <img
          src="https://i.postimg.cc/jdBJ70s9/Foto-de-juan-mendez-en-Pexels-1.jpg"
          alt="cool girl on blue background"
          className={classes.img}
        />
      </Grid>
      <Grid
        item
        container
        lg={5}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Typography variant="h2" align="center">
          LOREM IPSUM
        </Typography>
        <Typography variant="h4" align="center">
          LOREM IPSUM
        </Typography>
      </Grid>
      <Grid
        item
        container
        lg={5}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Typography variant="h2" align="center">
          LOREM IPSUM
        </Typography>
        <Typography variant="h4" align="center">
          LOREM IPSUM
        </Typography>
      </Grid>
      <Grid item lg={7} className={classes.imgContainer}>
        <img
          src="https://i.postimg.cc/xj31HJPm/Photo-by-EVG-Culture-from-Pexels-1.jpg"
          alt="cool girl on yellow background"
          className={classes.img}
        />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: `${theme.spacing(3)}px 0`,
    background: "#F7E4D0",
    height: "100vh",
  },
  imgContainer: {
    height: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "bottom",
  },
}));
