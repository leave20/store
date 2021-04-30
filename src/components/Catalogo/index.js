import { makeStyles, Box, Container, Link } from "@material-ui/core";

import { Carousel } from "./Carousel";
import SectionHeader from "../SectionHeader";

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
  anchor: {
    textDecoration: "none",
  },
}));

export default function Catalogo({ title, dark, id }) {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container>
        <SectionHeader
          title={title}
          descriptionElement={(props) => (
            <Link href="/" className={`${props.className} ${classes.anchor}`}>
              {"< VER TODOS >"}
            </Link>
          )}
        />
        <Carousel mb={120} data={mockData} />
        <Carousel data={mockData} />
      </Container>
    </Box>
  );
}
