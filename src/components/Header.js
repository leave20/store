import { makeStyles, Paper, Grid } from "@material-ui/core";
import newTheme from "../styles/NewTheme";
import banner from "../images/g898.png";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  header: {
    width: "100%",
    objectFit: "cover",
    height: "120vh",
  },

  card: {
    borderRadius: 0,
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2,
    },
  },
  midddleCard: {
    borderRadius: 0,
    padding: 22.5,
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2,
    },
  },
}));

export default function Header({ title, dark, id }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.header} src={banner} alt="banner" />

      <Grid container>
        <Grid item md={4} style={{ width: "100%" }}>
          <Paper className={classes.card}>De Lunes a Sabado</Paper>
        </Grid>

        <Grid item md={4} style={{ width: "100%" }}>
          <Paper className={classes.midddleCard}>
            Nuestros horatios de a tencion <br />
            8:00 am - 20:00pm
          </Paper>
        </Grid>

        <Grid item md={4} style={{ width: "100%" }}>
          <Paper className={classes.card}>Repartimos por todo Lima</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
