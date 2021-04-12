import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import dataPic from "../svg/data.svg";

const useStyles = makeStyles({
  root: {
    maxHeight: 300,
    maxWidth: 300,
    margin: 20,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={dataPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
          </div>

          <Typography
            style={{ textAlign: "center" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
