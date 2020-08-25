import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image';
import DocumentHeading from '../components/DocumentHeading'
import PathwayNav from '../components/PathwayNav'
import MLImage from '../images/machine-learning.jpg'
import Subheading from '../components/DocumentSubheadng'
import SideBar from '../components/SideBar'
// import StepCard from '../components/StepCard'
// import SimpleList from '../components/SimpleList'
import StepAccordion from '../components/StepAccordion'
import pathways from '../data/pathways.json'

const useStyles = makeStyles({
    image: {
        height: 80,
        width: '100%',
        
    }
})
export default function IndividualPathway(props) {
    const classes = useStyles();
    return(
        <Grid container spacing={3}>
            <Grid item>
                <SideBar />
            </Grid>
            <Grid item container xs direction='column'>
                <Grid item>
                    <Typography>
                        {<DocumentHeading text='Data Science' />}
                    </Typography>
                </Grid>
                <Grid item>
                    <PathwayNav />
                </Grid>
                <Grid item xs >
                    <Image src={MLImage} className={classes.image} />
                </Grid>
                <Grid item mt={1}>
                    Pathway Overview
                </Grid>
                <Grid item>
                    Steps accordion
                    <StepAccordion />
                </Grid>
            </Grid>
        </Grid>
    
    )
}