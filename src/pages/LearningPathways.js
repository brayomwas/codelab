import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import PathwayCard from "../components/PathwayCard";
import SideBar from "../components/SideBar";
import DocumentHeading from "../components/DocumentHeading";
import DocumentSubheading from "../components/DocumentSubheadng";
import pathways from "../data/pathways.json";

const useStyles = makeStyles({
    mt70: {
        marginTop: '50px'
    }
});
const allPathways = pathways.map((pathway) => {
  let pathwayObj = { ...pathway };
  return pathwayObj;
});

console.log(allPathways[0]);

const rows = allPathways.map((pathway) => (
  <Grid item xs={6} sm={4}>
    {/* <Typography>{<DocumentSubheading text="Data Science" />}</Typography> */}
    <PathwayCard title={pathway.title} />
  </Grid>
));
export default function LearningPathways() {
    const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item container xs direction="column">
        <Grid item xs>
          {/* Pathway Name */}
          <Typography>
            {<DocumentHeading text="Python Career Pathways" />}
          </Typography>
        </Grid>
        <Grid item container xs spacing={3} className={classes.mt70}>
          {/* Pathway cards */}
          {rows}
          {/* <Grid item xs={6} sm={4}>
            <Typography>
              {<DocumentSubheading text="Data Science" />}
            </Typography>
            <PathwayCard />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PathwayCard />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PathwayCard />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PathwayCard />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PathwayCard />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
