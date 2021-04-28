import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "0 13px",
    boxShadow: "none",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 12,
    fontSize: "1rem",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
}));

export const Slide = ({ image, header, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={image} alt="image_slide" className={classes.image} />
      <CardContent>
        <Typography variant="h5" className={classes.header}>
          {header}
        </Typography>
        <Typography>{price}</Typography>
      </CardContent>
    </Card>
  );
};
