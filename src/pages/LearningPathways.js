import React from "react";
import { Route, Link } from 'react-router-dom';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import PathwayCard from "../components/PathwayCard";
import SideBar from "../components/SideBar";
import DocumentHeading from "../components/DocumentHeading";
import DocumentSubheading from "../components/DocumentSubheadng";
import pathways from "../data/pathways.json";
import IndividualPathway from "./IndivudualPathway";
import Layout from '../components/Layout'


const useStyles = makeStyles({
    mt70: {
        marginTop: '50px'
    }
});


function LearningPathways({ match }) {
    const classes = useStyles();

    const allPathways = pathways.map((pathway) => {
      let pathwayObj = { ...pathway };
      return pathwayObj;
    });
    
    console.log(allPathways[0]);
    console.log(match)
    const rows = allPathways.map((pathway) => (
      <Grid item xs={6} sm={4}>
        <Link to={`${match.url}/${pathway.pathway}`}>
           <PathwayCard title={pathway.pathway} />
        </Link>
        
      </Grid>
    ));
    

  return (
    <Grid container spacing={3}>
      {/* <Grid item>
        <SideBar />
      </Grid> */}
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
        </Grid>
      </Grid>
      
      {/* <Route 
          exact
          path={`${match.path}/:individualPathway`}
          render={(props) => <IndividualPathway  data={pathways} {...props}/>}
      /> */}
      
    </Grid>
    
  );
}

export default LearningPathways;
