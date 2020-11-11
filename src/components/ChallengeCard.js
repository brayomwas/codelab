import React from 'react';
import { Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonRouter from './Button';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    }
});

export default function ChallengeCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant='outlined'>
            <CardContent>
                <Typography variant='h5' component='h2' color='textSecondary' gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant='body2' component='p' gutterBottom>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid item xs={12}>
                    <ButtonRouter buttonText='Explore' linkDest='internal' />
                </Grid>
                
            </CardActions>
        </Card>
    )
}