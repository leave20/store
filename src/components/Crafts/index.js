import { makeStyles, Box, Container, Link } from "@material-ui/core";

import SectionHeader from "../SectionHeader";
import { Carousel } from "./Carousel";

const mockData = [
  {
    id: 1,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
  {
    id: 2,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
  {
    id: 3,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
  {
    id: 4,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
  {
    id: 5,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
  {
    id: 6,
    header: " NOM/TIPO DEL VESTIDO",
    price: "s/ 90.99",
    image:
      "https://i.pinimg.com/originals/89/24/00/8924006c70834821cc1509f82d21f2ab.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginBottom: 24,
    overflow: "hidden",
  },
  anchor: {
    textDecoration: "none",
  },
}));

const Crafts = ({ title }) => {
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
};

export default Crafts;
