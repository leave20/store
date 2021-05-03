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
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
  },
  {
    id: 2,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
  },
  {
    id: 3,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
  },
  {
    id: 4,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
  },
  {
    id: 5,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
  },
  {
    id: 6,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/474x/9e/61/03/9e6103b4b21bc5e0ce03f677f711371d--blue-flowers-print-shorts.jpg",
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
