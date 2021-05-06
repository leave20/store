import {
  makeStyles,
  Hidden,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import Socials from "./Socials";

const logo = `${process.env.PUBLIC_URL}/logo-footer.svg`;

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
  firstText: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      margin: `${theme.spacing(4)}px auto`,
    },
  },
  lastText: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export default function Footer({ title, dark, id }) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <img src={logo} alt="logo_footer" className={classes.logo} />
        <Grid container spacing={4} justify="space-between" alignItems="center">
          <Hidden mdUp>
            <Grid item xs={12} md={4}>
              <Socials />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={4}>
            <Typography className={classes.firstText}>
              © 2020 All rights reserved
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={4}>
              <Socials />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={4}>
            <Typography className={classes.lastText}>
              Creado por <strong>Stackly Code</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
