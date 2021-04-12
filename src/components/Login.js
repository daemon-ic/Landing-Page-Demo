import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(51, 167, 222)",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  input: { paddingBottom: "10px" },
  button: { marginTop: "20px", color: "white" },
  loginBox: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  left: {
    height: "100vh",
    width: "50vw",
    [theme.breakpoints.down("sm")]: { display: "none" },
  },

  right: {
    height: "100vh",
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: { width: "100vw" },
  },
}));

function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: "#20252C",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className={classes.left} />
          <div className={classes.right}>
            <div className={classes.loginBox}>
              <Paper
                elevation={3}
                style={{
                  height: "400px",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                {/* ------------------------------------------------------------------------------ TITLE  */}

                {/* TODO:  FIND OUT WHY DOESN'T JUSTIFY CENTER DOESNT FIX THE SPACING BETWEEN THESE */}
                <div
                  style={{
                    fontSize: "30px",
                    paddingTop: "40px",
                    paddingBottom: "20px",
                  }}
                >
                  Welcome
                </div>
                {/* ------------------------------------------------------------------------------ INPUTS */}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <form className={classes.input} noValidate autoComplete="off">
                    <TextField
                      color="primary"
                      id="standard-basic"
                      label="Email"
                    />
                  </form>
                  {hasAccount ? (
                    <form
                      className={classes.input}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        color="primary"
                        id="standard-basic"
                        label="Name"
                      />
                    </form>
                  ) : null}

                  <form className={classes.input} noValidate autoComplete="off">
                    <TextField
                      color="primary"
                      id="standard-basic"
                      label="Password"
                    />
                  </form>

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    {hasAccount ? "Sign Up" : "Login"}
                  </Button>
                </div>

                {/* ------------------------------------------------------------------------------ SWITCHER */}
                <div style={{ marginTop: "auto", paddingBottom: "10px" }}>
                  {hasAccount ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "40px",
                        fontSize: "12px",
                      }}
                    >
                      <div style={{ paddingRight: " 4px" }}>
                        Already have an account?
                      </div>{" "}
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {" "}
                        Log In{" "}
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "40px",
                        fontSize: "12px",
                      }}
                    >
                      <div style={{ paddingRight: " 4px" }}>
                        Don't have an account?
                      </div>{" "}
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {" "}
                        Sign Up{" "}
                      </div>
                    </div>
                  )}
                </div>
                {/* ------------------------------------------------------------------------------  */}
              </Paper>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Login;
