import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import ButtonRouter from './Button';

export default function Hero() {
    return (
        <Grid container direction='row'>
            <Grid item container direction='column'xs={12} md={6}>
                <Grid item>
                    <Typography>
                        Are you learning to code remotely?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        Match with Peers.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        Practice Coding Together!
                    </Typography>
                </Grid>
                <Grid>
                    <Typography>
                        Learning coding skills online should not be boring and isolated. Link up with other learners and practice together.
                    </Typography>
                </Grid>
                <Grid>
                    <ButtonRouter variant='container' text='Get started for free' linkDest='internal' />
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
            {/* svg */}
            </Grid>
        </Grid>
    )
}