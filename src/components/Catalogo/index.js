import { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Container,
  Link,
  useMediaQuery,
} from "@material-ui/core";
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
  const getMobile = () => {
    // return useMediaQuery( theme => theme.breakpoint.down('sm')); usar esto cuando haya Theme Provider
    return window.innerWidth < 960;
  };
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(getMobile());

  useEffect(() => {
    const handleResize = (e) => {
      setIsMobile(getMobile());
    };
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("rezise", handleResize);
  }, []);
  return (
    <Box component="section" className={classes.root} id={id}>
      <Container>
        <SectionHeader
          title={title}
          descriptionElement={(props) => (
            <Link href="/" className={`${props.className} ${classes.anchor}`}>
              {`< VER TODOS >`}
            </Link>
          )}
        />
        <Carousel mb={120} mobile={isMobile} data={mockData} />
        <Carousel mobile={isMobile} data={mockData} />
      </Container>
    </Box>
  );
}
