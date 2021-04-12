import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItems: {
    fontSize: "13px",
    color: "grey",
    paddingBottom: "5px",
  },
  footerLogo1: {
    marginBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0px",
      display: "none",
    },
  },
  footerLogo2: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingTop: "30px",
      paddingLeft: "40px",
    },
  },
  footerContainer: {
    marginTop: "150px",
    width: "80vw",
    height: "35vh",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      height: "30vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
      marginBottom: "50px",
      flexDirection: "column",
      height: "100vh",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const exploreList = [
    { title: "Home", link: "empty" },
    { title: "About", link: "empty" },
    { title: "Pricing", link: "empty" },
    { title: "FAQ", link: "empty" },
  ];

  const contactList = [
    { title: "Contact Us", link: "empty" },
    { title: "Facebook", link: "empty" },
    { title: "Instagram", link: "empty" },
    { title: "Twitter", link: "empty" },
  ];

  const legalList = [
    { title: "Terms & Conditions", link: "empty" },
    { title: "Privacy", link: "empty" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "30vh",
        backgroundColor: "#20252C",
        alignItems: "center",
      }}
    >
      <div className={classes.footerContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.footerLogo1}>Place Logo Here</div>
        </div>
        <ul style={{ listStyle: "none" }}>
          <div style={{ paddingBottom: "30px" }}>Explore</div>

          {exploreList.map((explore) => (
            <li className={classes.listItems} key={explore.title}>
              {explore.title}
            </li>
          ))}
        </ul>
        <ul style={{ listStyle: "none" }}>
          <div style={{ paddingBottom: "30px" }}>Contact</div>
          {contactList.map((contact) => (
            <li className={classes.listItems} key={contact.title}>
              {contact.title}
            </li>
          ))}
        </ul>
        <ul style={{ listStyle: "none" }}>
          <div style={{ paddingBottom: "30px" }}>Legal</div>
          {legalList.map((legal) => (
            <li className={classes.listItems} key={legal.title}>
              {legal.title}
            </li>
          ))}
        </ul>
        <div className={classes.footerLogo2}> Place Logo Here</div>
      </div>
    </div>
  );
};

export default Footer;
