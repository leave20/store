import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const Socials = ({ links = networks }) => {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      {links.map(({ href, icon, alt }, idx) => (
        <li key={`${alt}-${idx}`}>
          <a href={href} target="_blank" rel="noreferrer">
            <img src={icon} alt={alt} className={classes.networkImg} />
          </a>
        </li>
      ))}
    </Box>
  );
};

export default Socials;
