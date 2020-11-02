import React from 'react';
import { Paper, Grid, Typography, Divider, InputBase, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grade } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 200
    },
    rootForm: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SuggestPathway() {
    const classes = useStyles();
    return (
        <Paper elevation={2} className={classes.root}>
            <Grid container direction='row' spacing={2} alignItems='center'>
                <Grid item container direction='column' spacing={3} xs={10} justify='center'>
                    <Grid item>
                        <Typography variant='h4'>
                            Suggest a Career Pathway!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Let us hear what missing pathway guide you'd love to see on Chaptr Codelab.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paper component='form' className={classes.rootForm}>
                            <InputBase 
                                className={classes.input}
                                placeholder='e.g Web Development with Javascript'
                                inputProps={{ 'aria-label': 'pathway suggestion', }}
                            />
                            <Divider className={classes.divider} orientation= 'vertical' />
                            <Button color='primary'>
                                Submit
                            </Button>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid item xs={2}>
                    <Grade style={{fontSize: 66}} />
                </Grid>
            </Grid>
        </Paper>
    )
}