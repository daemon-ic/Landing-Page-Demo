import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// TODO: Change button color and make more of a paddingBottom when resized smaller

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

  title: {
    fontSize: "calc( 0px + 4vw)",
    flexGrow: 1,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(15px + 5vw)",
    },
  },
}));

const HeroImage = () => {
  const classes = useStyles();

  return (
    <div
      className="heroContainer"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "50vw",
          paddingLeft: "10vw",
          paddingBottom: "5vw",
        }}
      >
        <Typography variant="h6" className={classes.title}>
          Lorem ipsum dolor sit amet, consectetur
        </Typography>

        <div
          style={{
            paddingTop: "30px",
          }}
        >
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
    </div>
  );
};

export default HeroImage;
