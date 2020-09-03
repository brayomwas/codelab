import React from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import SideBar from './SideBar';

export default function Layout({children}) {
    return (
        <Grid container direction='column'>
            <Grid>
                <Nav />
            </Grid>
            <Grid item container xs spacing={2} direction='row'>
                <Grid item xs sm={3}>
                    <SideBar />
                </Grid>
                <Grid item container xs sm={9}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}