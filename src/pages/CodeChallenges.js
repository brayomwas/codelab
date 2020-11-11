import React, { useState, useEffect } from 'react';
import { Grid, MenuItem, TextField, Typography, Checkbox } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import Filter from '../components/Filter';
import DocumentHeading from '../components/DocumentHeading';
import ChallengeCard from '../components/ChallengeCard';

export default function CodeChallenges() {
    const [searchValue, setSearchValue] = useState('Search');
    const [language, setLanguage] = useState('Python');
    const [difficulty, setDifficulty] = useState('Easy');
    const [challenges, setChallenges] = useState([]);
    // const [checked, setChecked] = useState(true);

    function handleLanguageChange(event) {
        setLanguage(event.target.value);
    }

    function handleDifficultyChange(event) {
        setDifficulty(event.target.value);
    }

    const languages = ['Python', 'Javascript'];

    const difficulties = ['Easy', 'Intermediate', 'Advanced'];

    const cards = challenges.map((challenge) => {
        return (
            <Grid item xs={6} md={4}>
                <ChallengeCard title={challenge.title.rendered} description={challenge.content.rendered} />
            </Grid>
        )
    })
    
    useEffect(() => {
        axios.get('http://box5880.temp.domains/~chaptrgl/codelab/wp-json/wp/v2/challenge').then(res => {
             setChallenges(res.data);
            // console.log(challenges);
        })
    }, []);
    console.log(challenges);
    return (
        <Grid container direction='column' spacing={4}>
            <Grid item xs>
                <DocumentHeading text='Code Challenges'/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='p'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque recusandae tempore non cumque fugit in hic?
                </Typography>
            </Grid>
            <Grid item container direction='row' xs={12} spacing={4}>
                <Grid item xs={6}>
                    <SearchBar
                        value={searchValue}
                        onChange={() => setSearchValue('')}
                        onRequestSearch={() => alert('Searching')} 
                    />
                </Grid>
                <Grid item container direction='row' spacing={1} xs={6} alignItems='space-between'>
                    <Grid item xs={3}>
                        <Filter item={language} handleChange={handleLanguageChange} menuItems={languages} label='Language' />
                    </Grid>
                    <Grid item xs={3}>
                        <Filter item={difficulty} handleChange={handleDifficultyChange} menuItems={difficulties} label='Difficulty' />
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item container direction='row' xs={12} spacing={3}>
                {cards}
            </Grid>
           
            
        </Grid>
    )
}