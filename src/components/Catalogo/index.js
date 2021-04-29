import { makeStyles, Box, Container, Typography } from "@material-ui/core";

import { Carousel } from "./Carousel";
// import newTheme from '../styles/NewTheme';

const mockData = [
  {
    id: 1,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
  },
  {
    id: 2,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
  },
  {
    id: 3,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
  },
  {
    id: 4,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
  },
  {
    id: 5,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
  },
  {
    id: 6,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwa594f9c2/images/20000311_memories_meant_to_bloom_dress_trudy_vintage_floral_black_ALT03.jpg?sw=600&sm=fit",
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
