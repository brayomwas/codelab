import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardHeading from "./CardHeading";
import ButtonRouter from "./Button";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
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
            image={props.image}
            title={props.title}
          />
          <CardContent className={`${classes.content} ${classes.central}`}>
            <Typography gutterBottom>
              <CardHeading text={props.title} />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.central}>
          <Grid item xs={12}>
             <ButtonRouter text={props.title} buttonText={props.buttonText} linkDest={props.linkDest} link={props.link} variant='outlined'/>
          </Grid>
          
        </CardActions>
      </Card>
    </div>
  );
}
