import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  appbar: {
    background: "transparent",
    [theme.breakpoints.down("sm")]: {
      background: "rgb(32, 37, 44)",
    },
  },
  headerbuttons: {
    color: "white",
  },
}));

const Header = ({ pageChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0} position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Spicy Shipper
          </Typography>
          <Button
            className={classes.headerbuttons}
            color="inherit"
            onClick={() => pageChange("/login")}
          >
            Login / Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
