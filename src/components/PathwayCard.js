import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/machine-learning.jpg";
import CardHeading from "./CardHeading";
import IndividualPathway from "../pages/IndivudualPathway";
import ButtonRouter from "./Button";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  background: {
    "&:hover": {
      background: "none",
      color: "#000000",
    },
  },
  central: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function PathwayCard(props) {
  const classes = useStyles();
  return (
    <div className="hoverable">
      <Card className={classes.root}>
        <CardActionArea className={classes.background}>
          <CardMedia
            className={classes.media}
            image={Image}
            title={props.title}
          />
          <CardContent className={`${classes.content} ${classes.central}`}>
            <Typography gutterBottom>
              <CardHeading text={props.title} />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.central}>
          {/* <Button size='small' color='primary' onClick={handleClick}>
          Explore
        </Button> */}
          <ButtonRouter text={props.title} />
        </CardActions>
      </Card>
    </div>
  );
}
