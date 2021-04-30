import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
//import newTheme from "../styles/NewTheme";

const mostrarNumero = (numero) => `${numero.slice(0, 3)} - ${numero.slice(3)}`;

export default function Contact({ title, dark, id, contacto }) {
  const classes = useStyles();
  const numero = contacto || "99999999999";

  return (
    <Box className={classes.root} component="section" id={id}>
      <Typography variant="h6" align="center">
        Realiza tu compra al siguiente número
      </Typography>
      <Button
        color="inherit"
        href={`https://api.whatsapp.com/send/?phone=${numero}`}
        target="_bank"
        className={classes.button}
        startIcon={<WhatsApp className={classes.icon} />}
      >
        {mostrarNumero(numero)}
      </Button>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(7),
    fontSize: "1.375rem",
  },
  icon: {
    fontSize: "2rem !important",
  },
}));
