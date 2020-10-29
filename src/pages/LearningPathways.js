import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField } from "@material-ui/core";
import { LibraryAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import PathwayCard from "../components/PathwayCard";
import DocumentHeading from "../components/DocumentHeading";
import ButtonRouter from '../components/Button';
import pathways from "../data/pathways.json";
import Image from "../images/machine-learning.jpg";

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
      <Grid item container xs direction="column">
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
        <Grid item container direction='row' xs={12} md={10}> 
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h3'>
                  Suggest a Career Pathway!
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Let us hear what missing pathway guide you'd love to see on Chaptr Codelab
              </Typography>
            </Grid>
            <Grid item container direction='row'>
              <Grid item xs={8}>
                  <form className={classes.suggestionBox} noValidate autoComplete='off'>
                    <TextField label='e.g Web Development with JavaScript' />
                  </form>
              </Grid>
              <Grid item xs={3}> 
                <ButtonRouter text='Submit' linkDest='internal' variant='contained'/> 
              </Grid>
            </Grid>
          </Grid>

          <Grid item>

          </Grid>
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
