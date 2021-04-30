import { Box, Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginBottom: 24,
  },
  heading: {
    fontWeight: 700,
    marginBottom: 38,
    color: "#212834",
    fontFamily: "fantasy",
  },
  description: {
    color: "#212834",
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
  },
}));

const SectionHeader = ({
  title,
  description,
  descriptionElement: DescriptionElement,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.heading}>
          {title}
        </Typography>
        {DescriptionElement ? (
          <DescriptionElement className={classes.description} />
        ) : (
          <Typography className={classes.description}>{description}</Typography>
        )}
      </Container>
    </Box>
  );
};

export default SectionHeader;
