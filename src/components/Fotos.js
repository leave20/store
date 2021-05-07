import { makeStyles, Box, Hidden } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

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
    <Hidden smDown>
      <Box component="section" className={classes.root}>
        <SectionHeader
          title={title}
          description="Fotos de nuestros clientes agradecidos con su respectiva compra"
        />
        <Box className={classes.photosGrid}>
          <img
            src="https://th.bing.com/th/id/OIP.UMwlUoXJ0HhSGsfUF_BOzgHaE7?pid=ImgDet&rs=1"
            alt="photo_item"
          />
          <img
            src="https://th.bing.com/th/id/OIP.UMwlUoXJ0HhSGsfUF_BOzgHaE7?pid=ImgDet&rs=1"
            alt="photo_item"
          />
          <img
            src="https://th.bing.com/th/id/OIP.UMwlUoXJ0HhSGsfUF_BOzgHaE7?pid=ImgDet&rs=1"
            alt="photo_item"
          />
          <img
            src="https://th.bing.com/th/id/OIP.UMwlUoXJ0HhSGsfUF_BOzgHaE7?pid=ImgDet&rs=1"
            alt="photo_item"
          />
          <img
            src="https://th.bing.com/th/id/OIP.UMwlUoXJ0HhSGsfUF_BOzgHaE7?pid=ImgDet&rs=1"
            alt="photo_item"
          />
        </Box>
      </Box>
    </Hidden>
  );
}
