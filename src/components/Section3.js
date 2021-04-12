import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FeatureCard1 from "./items/FeatureCard1";
import FeatureCard2 from "./items/FeatureCard2";
import FeatureCard3 from "./items/FeatureCard3";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "calc( 0px + 4vw)",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "100px",
      fontSize: "calc(15px + 5vw)",
      textAlign: "center",
    },
  },
  title2: {
    fontSize: "25px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
      fontSize: "calc(5px + 3vw)",
      textAlign: "center",
    },
  },
  cardContainter: {
    paddingTop: "480px",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      position: "static",
      paddingTop: "0px",
    },
  },
}));

const Section3 = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "120vh",
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography className={classes.title}>
        At vero eos et accusamus et
      </Typography>
      <Typography className={classes.title2}>
        Et harum quidem rerum facilis est et expedita distinctio
      </Typography>
      <div className={classes.cardContainter}>
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
      </div>
    </div>
  );
};

export default Section3;
