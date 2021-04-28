import {
  makeStyles,
  Grid,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
// import newTheme from "../styles/NewTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "24px 0",
  },
  headingBox: {
    textAlign: "center",
    marginBottom: 24,
  },
  heading: {
    fontWeight: 700,
    marginBottom: 38,
    color: "#212834",
    fontFamily: "fantasy",
  },
  photosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: "26px",
    padding: "0 26px",
    "& > img": {
      width: "100%",
    },
  },
}));

export default function Fotos({ title, dark, id }) {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Box className={classes.headingBox}>
        <Typography variant="h4" className={classes.heading}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.anchor}>
          Fotos de nuestros clientes agradecidos con su respectiva compra
        </Typography>
      </Box>
      <Box className={classes.photosGrid}>
        <img src="https://via.placeholder.com/246x248.png" alt="photo_item" />
        <img src="https://via.placeholder.com/246x248.png" alt="photo_item" />
        <img src="https://via.placeholder.com/246x248.png" alt="photo_item" />
        <img src="https://via.placeholder.com/246x248.png" alt="photo_item" />
        <img src="https://via.placeholder.com/246x248.png" alt="photo_item" />
      </Box>
    </Box>
  );
}
