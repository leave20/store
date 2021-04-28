import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Container,
} from "@material-ui/core";
import newTheme from "../styles/NewTheme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { Link } from "react-scroll";

const logo = `${process.env.PUBLIC_URL}/logo.svg`;

const links = [
  {
    id: "catalogo",
    text: "VESTIDOS",
  },
  {
    id: "fotos",
    text: "FOTOS",
  },
  {
    id: "contact",
    text: "CONTACTO",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      background: "#ffffff",
    },
    height: "70px",
    background: "#fff",
    color: "#212834",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    justifyItems: "center",
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  logo: {
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    justifyItems: "center",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#212834",
      fontSize: "1.25rem",
      fontWeight: "regular",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: newTheme.palette.primary.main,
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#212834",
      position: "absolute",
      top: 5,
      right: 20,
    },
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
    },
    "& h5": {
      margin: theme.spacing(2, 0, 0, 0),
      color: "#212834",
    },
    "& h5:hover": {
      color: "#fff",
      background: "#2F2F2F",
      cursor: "pointer",
    },
  },
  cancelIcon: {
    height: "5vh",
  },
}));

export default function NavBar({ title, dark, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" className={`${classes.root} `}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <img src={logo} className={classes.logo} alt="logo" height={40} />
            <List className={classes.menu}>
              {links.map(({ id, text }, index) => (
                <Link
                  key={index}
                  to={id}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  duration={500}
                  offset={-70.5}
                >
                  {text}
                </Link>
              ))}
            </List>
            <IconButton
              edge="end"
              className={classes.menubutton}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon className={classes.cancelIcon} fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            smooth={true}
            activeClass="active"
            duration={500}
            offset={-70.5}
          >
            <ListItem component="h5">{text}</ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
}
