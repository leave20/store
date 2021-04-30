import { makeStyles, Paper, Grid } from "@material-ui/core";
import newTheme from "../styles/NewTheme";

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
    borderRadius: "none",
    padding: 32,
    borderStyle: "none",
  },
  midddleCard: {
    borderRadius: "none",
    padding: 22.5,
    marginLeft: 15,
    marginRight: 15,
  },
}));

export default function Header({ title, dark, id }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.header}
        src={
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        }
      />
      <div>
        <Grid container>
          <Grid item md={4}>
            <Paper className={classes.card}>De Lunes a Sabado</Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className={classes.midddleCard}>
              Nuestros horatios de a tencion <br />
              8:00 am - 20:00pm
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className={classes.card}>Repartimos por todo Lima</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
