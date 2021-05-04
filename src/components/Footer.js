import {
  makeStyles,
  Container,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";

const logo = `${process.env.PUBLIC_URL}/logo-footer.svg`;

const networks = [
  {
    icon: `${process.env.PUBLIC_URL}/svg/youtube.svg`,
    href: "/",
    alt: "youtube",
  },
  {
    icon: `${process.env.PUBLIC_URL}/svg/facebook.svg`,
    href: "/",
    alt: "facebook",
  },
  {
    icon: `${process.env.PUBLIC_URL}/svg/twitter.svg`,
    href: "/",
    alt: "twitter",
  },
  {
    icon: `${process.env.PUBLIC_URL}/svg/discord.svg`,
    href: "/",
    alt: "discord",
  },
  {
    icon: `${process.env.PUBLIC_URL}/svg/twitch.svg`,
    href: "/",
    alt: "twitch",
  },
  {
    icon: `${process.env.PUBLIC_URL}/svg/github.svg`,
    href: "/",
    alt: "github",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#212834",
    padding: "70px 0",
    color: "#fff",
  },
  logo: {
    display: "block",
    height: 60,
    margin: "0 auto",
    marginBottom: "60px",
  },
  networksGrid: {
    display: "grid",
    gridAutoFlow: "column",
    margin: "0 auto",
    gap: "32px",
    width: "min-content",
    "& li": {
      listStyle: "none",
      display: "inline-flex",
      alignItems: "center",
    },
    "& a": {
      color: "#fff",
      display: "inherit",
      alignItems: "inherit",
    },
  },
  networkImg: {
    objectFit: "cover",
    objectPosition: "center",
    height: 20,
  },
}));

export default function Footer({ title, dark, id }) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <img src={logo} alt="logo_footer" className={classes.logo} />
        <Grid container spacing={4} justify="space-between" alignItems="center">
          <Grid item lg={4}>
            <Typography>© 2020 All rights reserved</Typography>
          </Grid>
          <Grid item lg={4}>
            <Box component="ul" className={classes.networksGrid}>
              {networks.map(({ href, icon, alt }, idx) => (
                <li key={`${alt}-${idx}`}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <img src={icon} alt={alt} className={classes.networkImg} />
                  </a>
                </li>
              ))}
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Typography align="right">
              Creado por <strong>Stackly Code</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
