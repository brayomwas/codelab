import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image';
import DocumentHeading from '../components/DocumentHeading'
import PathwayNav from '../components/PathwayNav'
import MLImage from '../images/machine-learning.jpg'
import Subheading from '../components/DocumentSubheading'
// import StepCard from '../components/StepCard'
// import SimpleList from '../components/SimpleList'
import StepAccordion from '../components/StepAccordion'
import pathways from '../data/pathways.json'


const useStyles = makeStyles({
    step: {
        marginTop: '300px'
    },
    heading: {
        color: '#000000'
    },
})

export default function IndividualPathway(props) {
    const individualPathway = pathways.find(pathway => pathway.pathway === props.match.params.individualPathway);
    
    const classes = useStyles();

    let accordion = [];

    for (let i = 0; i < individualPathway.data.length; i++) {
        accordion.push(<StepAccordion
            summary={individualPathway.data[i].pathwayModule}
            description={individualPathway.data[i].description}
            step={i + 1}
            />)
    }

    return(
        <Grid container spacing={3}>
            <Grid item container xs direction='column'spacing={2}>
                <Grid item>
                    <Typography>
                        {<DocumentHeading text={individualPathway.pathway} />}
                    </Typography>
                </Grid>
                <Grid item>
                    <PathwayNav />
                </Grid>
                <Grid item xs>
                    {/* <Image src={MLImage} imageStyle={{height: '100vh'}} /> */}
                    <img src={MLImage} alt='Image' />
                </Grid>
                {/* <Grid item xs >
                   <Subheading text='Steps' />
                    
                </Grid> */}
                <Grid item xs={12} sm={10} >
                    {/* Steps accordion */}
                    <Typography variant='h4'>
                        <Subheading text='Steps' />
                    </Typography>
                    {accordion}
                </Grid>
            </Grid>
        </Grid>
    
    )
}