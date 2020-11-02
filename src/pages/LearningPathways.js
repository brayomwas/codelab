import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField } from "@material-ui/core";
import { LibraryAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import PathwayCard from "../components/PathwayCard";
import DocumentHeading from "../components/DocumentHeading";
import ButtonRouter from '../components/Button';
import pathways from "../data/pathways.json";
import Image from "../images/machine-learning.jpg";
import SuggestPathway from "../components/SuggestPathway";
import SearchBar from 'material-ui-search-bar';
const useStyles = makeStyles((theme) => ({
    mt70: {
        marginTop: '50px'
    },
    suggestionBox: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

function LearningPathways({ match }) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const allPathways = pathways.map((pathway) => {
      let pathwayObj = { ...pathway };
      return pathwayObj;
    });

    const rows = allPathways.map((pathway) => (
      <Grid item xs={6} sm={4}>
        <Link to={`${match.url}/${pathway.pathway}`}>
           <PathwayCard title={pathway.pathway} image={Image} buttonText='Explore' linkDest='internal' key={pathway.pathway}/>
        </Link>
      </Grid>
    ));
    

  return (
    <Grid container spacing={3}>
      <Grid item container xs direction="column" spacing={3}>
        <Grid item xs>
          {/* Pathway Name */}
          <Typography>
            {<DocumentHeading text="Python Career Pathways" />}
          </Typography>
        </Grid>

        {/* Add short description and a form to suggest a pathway */}
        <Grid item xs>
            <Typography>
              View curricular guides to your learning pathway, discover on-demand skills from the job market and get recommendations to the best courses on Udemy, Coursera, edX etc.
            </Typography>
        </Grid>
        {/* Add search bar */}
        <Grid item> 
          <SuggestPathway />
        </Grid>
        <Grid item>
            <SearchBar 
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onRequestSearch={() => console.log(value)}
              style={{disableUnderline: true}}
            />
        </Grid>
        <Grid item container xs spacing={3} className={classes.mt70}>
          {/* Pathway cards */}
          {rows}
        </Grid>
      </Grid>
    </Grid>
    
  );
}

export default LearningPathways;
