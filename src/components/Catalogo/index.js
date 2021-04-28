import { makeStyles, Box, Container, Typography } from "@material-ui/core";

import { Carousel } from "./Carousel";
// import newTheme from '../styles/NewTheme';

const mockData = [
  {
    id: 1,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
  {
    id: 2,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
  {
    id: 3,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
  {
    id: 4,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
  {
    id: 5,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
  {
    id: 6,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image: "https://via.placeholder.com/261x356.png",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "24px 0",
    overflow: "hidden",
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
  anchor: {
    textDecoration: "none",
    color: "#212834",
  },
}));

export default function Catalogo({ title, dark, id }) {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container>
        <Box className={classes.headingBox}>
          <Typography variant="h4" className={classes.heading}>
            {title}
          </Typography>
          <Typography
            component="a"
            variant="body2"
            href="/"
            className={classes.anchor}
          >
            {"< VER TODOS >"}
          </Typography>
        </Box>
        <Carousel mb={120} data={mockData} />
        <Carousel data={mockData} />
      </Container>
    </Box>
  );
}
