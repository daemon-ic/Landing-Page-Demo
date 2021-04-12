import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image2 from "../images/image2.png";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(51, 167, 222)",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button1: {
    color: "white",
  },
  mainContainer: {
    [theme.breakpoints.up("md")]: { alignItems: "center" },
  },
  titleContainer: {
    paddingTop: "150px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "90vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  title: {
    fontSize: "calc( 0px + 4vw)",
    flexGrow: 1,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(15px + 5vw)",
      textAlign: "center",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      paddingBottom: "40px",
    },
  },
  title2Container: {
    width: "300px",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    [theme.breakpoints.down("sm")]: {
      minWidth: "90vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  title2: {
    fontSize: "35px",
    flexGrow: 1,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(5px + 5vw)",
      textAlign: "center",
    },
  },
  smallText1: { textAlign: "center", color: "#407398" },
  smallText2: {
    color: "#407398",
    [theme.breakpoints.down("sm")]: { textAlign: "center" },
  },
  button: {
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  imageV1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "5vw",
      display: "block",
      position: "absolute",
      width: "700px",
    },
  },
  imageV2: {
    width: "100vw",
    height: "100%",
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Section2 = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.mainContainer}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "120vh",
        backgroundColor: "rgb(32, 37, 44)",
      }}
    >
      <div className={classes.titleContainer}>
        <Typography className={classes.smallText1}>Labore Lorem</Typography>
        <Typography variant="h6" className={classes.title}>
          Lorem ipsum dolor sit amet
        </Typography>
      </div>

      <img className={classes.imageV2} src={image2} alt="image2" />

      <div
        style={{
          paddingTop: "80px",
          display: "flex",
          flexDirection: "row",
          width: "100vw",
        }}
      >
        <div className={classes.title2Container}>
          <Typography className={classes.smallText2}>Labore Lorem</Typography>
          <Typography variant="h4" className={classes.title2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
          <div className={classes.button} style={{ paddingBottom: "50px" }}>
            <ThemeProvider theme={theme}>
              <Button
                className={classes.button1}
                variant="contained"
                color="primary"
              >
                LEARN MORE
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div
          style={{
            width: "400px",
          }}
        >
          <img className={classes.imageV1} src={image2} alt="image2" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
