import React, { useState } from 'react';
import { Grid, MenuItem, TextField, Typography, Checkbox } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import DocumentHeading from '../components/DocumentHeading';
import ML from '../images/machine-learning.jpg';
import PathwayStepper from '../components/Stepper';
import MobileStepper from '../components/Progress';
import SuggestPathway from '../components/SuggestPathway';
export default function CodeChallenges() {
    // const [searchValue, setSearchValue] = useState('Search');
    const [checked, setChecked] = useState(true);
    function handleLanguageChange() {
        alert('Change Language');
    }

    function handleCheckChange(event) {
        setChecked(event.target.checked);
    }
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
            {/* <Grid item xs={9}>
                <SearchBar
                    value={searchValue}
                    onChange={() => setSearchValue('')}
                    onRequestSearch={() => alert('Searching')} 
                />
            </Grid> */}
            <Grid item xs={10}>
                <Typography variant='h4' align='center'>Challenges </Typography>
            </Grid>
            <Grid item container direction='row' xs={9}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        Filter
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        value='Python'
                        onChange={handleLanguageChange}
                        InputProps={{disableUnderline: true}}
                    >
                            <MenuItem value='Python'>
                                Python
                            </MenuItem>
                            <MenuItem value='Javascript'>
                                Javascript
                            </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        value='Data Science'
                        onChange={handleLanguageChange}
                        InputProps={{disableUnderline: true}}
                    >
                        <MenuItem value='Data Science'>
                            Data Science
                        </MenuItem>
                        <MenuItem value='Machine Learning & AI'>
                            Machine Learning & AI
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        value='Beginner'
                        onChange={handleLanguageChange}
                        InputProps={{disableUnderline: true}}
                    >
                        <MenuItem value='Beginner'>
                            Beginner
                        </MenuItem>
                        <MenuItem value='Intermediate'>
                            Intermediate
                        </MenuItem>
                        <MenuItem value='Advanced'>
                            Advanced
                        </MenuItem>
                    </TextField>
                </Grid>
            </Grid>
            
            <Grid item container xs={10} direction='row'>
                <Grid item xs={3}>
                    <img src={ML} alt='Image' style={{height: 90, width: 100}}/>
                </Grid>
                <Grid item container xs={7} direction='column' spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Desc
                        </Typography>
                    </Grid>
                    <Grid item container direction='row' xs>
                        <Grid item xs>
                            <Typography>
                                Contributor
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Submission
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Language
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Pathways
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={10} direction='row'>
                <Grid item xs={3}>
                    <img src={ML} alt='Image' style={{height: 90, width: 100}}/>
                </Grid>
                <Grid item container xs={7} direction='column' spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Desc
                        </Typography>
                    </Grid>
                    <Grid item container direction='row' xs>
                        <Grid item xs>
                            <Typography>
                                Contributor
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Submission
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Language
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Pathways
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={10} direction='row'>
                <Grid item xs={3}>
                    <img src={ML} alt='Image' style={{height: 90, width: 100}}/>
                </Grid>
                <Grid item container xs={7} direction='column' spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Desc
                        </Typography>
                    </Grid>
                    <Grid item container direction='row' xs>
                        <Grid item xs>
                            <Typography>
                                Contributor
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Submission
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Language
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Pathways
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <MobileStepper />
            </Grid>
            <Grid item >
                <PathwayStepper />
            </Grid>
            <SuggestPathway />
            
        </Grid>
    )
}