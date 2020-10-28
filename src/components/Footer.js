import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction='row' spacing={4} xs={12}>
                <Grid item container direction='column' xs md={3}>
                    <Grid item>
                        <Typography variant='h4'>
                            Get In Touch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            +254 791 801660
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='p'>
                            hello@chaptrglobal.com
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction='column' xs md={3}>
                    <Grid item>
                        <Typography variant='h4'>
                            Important Links
                        </Typography>
                    </Grid>
                    <Grid>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/courses'>
                                        Discover Courses
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/bootcamps'>
                                        Explore Bootcamps
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/about'>
                                        About Us
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/contact'>
                                        Contact Us
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Grid item container direction='column' xs md={3}>
                    <Grid item>
                        <Typography variant='h4'>
                            Resources
                        </Typography>
                    </Grid>
                    <Grid item>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/blog'>
                                        Explore Blog
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/repos'>
                                        Github Repositories  
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to=''>
                                        Medium Blog
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to=''>
                                        YouTube Tutorials
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Grid item container direction='column' xs md={3}>
                    <Grid item>
                        <Typography variant='h4'>
                            Useful Links
                        </Typography>
                    </Grid>
                    <Grid item>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/signup'>
                                        Sign Up
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to='/signin'>
                                        Sign In
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}