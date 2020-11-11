import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, InputBase } from "@material-ui/core";
import { LibraryAdd, Search } from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles'
import PathwayCard from "../components/PathwayCard";
import DocumentHeading from "../components/DocumentHeading";
import ButtonRouter from '../components/Button';
import pathways from "../data/pathways.json";
import Image from "../images/machine-learning.jpg";
import SuggestPathway from "../components/SuggestPathway";
import SearchBar from 'material-ui-search-bar';
import Filter from "../components/Filter";
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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
}));

function LearningPathways({ match }) {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('Python');
    const [difficulty, setDifficulty] = useState('Beginner');

    const languages = ['Python', 'Javascript'];
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

    const allPathways = pathways.map((pathway) => {
      let pathwayObj = { ...pathway };
      return pathwayObj;
    });

    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    }

    const handleDifficultyChange = (event) => {
      setDifficulty(event.target.value);
    }

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
        <Grid item container direction='row' spacing={4}>
            <Grid item md={6}>
                {/* <div className={classes.search}>
                  <div className={classes.searchIcon}>
                      <Search />
                  </div>
                  <InputBase 
                    placeholder='Search...'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search', disableUnderline:true}}
                  />
                </div> */}
                <SearchBar 
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  onRequestSearch={() => console.log(value)}
                  style={{disableUnderline: true}}
                />
            </Grid>
            <Grid item md={6} container direction='row' spacing={1} alignItems='space-between'>
                    {/* filter */}
                <Grid item md={3}>
                    <Filter item={language} handleChange={handleLanguageChange} menuItems={languages} label='Language' />
                </Grid>
                
                <Grid item md={3}>
                    <Filter item={difficulty} handleChange={handleDifficultyChange} menuItems={difficulties} label='Difficulty' />
                </Grid>
                
            </Grid>
            <Grid item md={3}>
              {/* filter */}
              
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
