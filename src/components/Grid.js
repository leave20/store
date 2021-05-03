import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden, Typography } from "@material-ui/core";
// import newTheme from '../styles/NewTheme'

export default function StyledGrid({ title, dark, id }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id={id} component="section">
      <Grid item sm={12} md={7} className={classes.imgContainer}>
        <img
          src={gridData[0].src}
          alt={gridData[0].alt}
          className={classes.img}
        />
      </Grid>
      <Grid
        item
        container
        sm={12}
        md={5}
        className={classes.textContainer}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Typography variant="h2" align="center">
          {gridData[0].title}
        </Typography>
        <Typography variant="h4" align="center">
          {gridData[0].subtitle}
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          container
          sm={12}
          md={5}
          className={classes.textContainer}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Typography variant="h2" align="center">
            {gridData[1].title}
          </Typography>
          <Typography variant="h4" align="center">
            {gridData[1].subtitle}
          </Typography>
        </Grid>
      </Hidden>
      <Grid item sm={12} md={7} className={classes.imgContainer}>
        <img
          src={gridData[1].src}
          alt={gridData[1].alt}
          className={classes.img}
        />
      </Grid>
      <Hidden mdUp>
        <Grid
          item
          container
          sm={12}
          md={5}
          className={classes.textContainer}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Typography variant="h2" align="center">
            {gridData[1].title}
          </Typography>
          <Typography variant="h4" align="center">
            {gridData[1].subtitle}
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: `${theme.spacing(3)}px 0`,
    background: "#F7E4D0",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "125vh",
    },
  },
  textContainer: {
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "25%",
    },
  },
  imgContainer: {
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "25%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "bottom",
  },
}));

const gridData = [
  {
    src: "https://i.postimg.cc/jdBJ70s9/Foto-de-juan-mendez-en-Pexels-1.jpg",
    alt: "cool girl on blue background",
    title: "LOREM IPSUM",
    subtitle: "LOREM IPSUM",
  },
  {
    src: "https://i.postimg.cc/xj31HJPm/Photo-by-EVG-Culture-from-Pexels-1.jpg",
    alt: "cool girl on yellow background",
    title: "LOREM IPSUM",
    subtitle: "LOREM IPSUM",
  },
];
