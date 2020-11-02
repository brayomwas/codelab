import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons';
import Image from 'material-ui-image';
import DocumentHeading from '../components/DocumentHeading'
import PathwayNav from '../components/PathwayNav'
import MLImage from '../images/machine-learning.jpg'
import Subheading from '../components/DocumentSubheading'
// import StepCard from '../components/StepCard'
// import SimpleList from '../components/SimpleList'
import StepAccordion from '../components/StepAccordion'
import Progress from '../components/Progress';
import pathways from '../data/pathways.json'
import VerticalLinearStepper from '../components/Stepper';


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

    let steps = [];
    
    // for (let i = 0; i < individualPathway.data.length; i++) {
    //     accordion.push(<StepAccordion
    //         summary={individualPathway.data[i].pathwayModule}
    //         description={individualPathway.data[i].description}
    //         step={i + 1}
    //         />)
    // }

    return(
        <Grid container spacing={3} direction='column'>
            <Grid item>
                <Button color='primary'><ArrowBack />Back to Career Pathways</Button>
            </Grid>

            <Grid item>
                 <Typography>
                    {<DocumentHeading text={individualPathway.pathway} />}
                 </Typography>
            </Grid>

            <Grid item>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, aliquid.
                </Typography>
            </Grid>

            <Grid item xs={10}>
                <Typography variant='p'>
                    1 out of 6 steps completed
                </Typography>
                <Progress />
            </Grid>
            
            <Grid>
                <VerticalLinearStepper pathwayData={individualPathway.data}/>
            </Grid>













            {/* <Grid item container xs direction='column'spacing={2}>
                <Grid item>
                    <Typography>
                        {<DocumentHeading text={individualPathway.pathway} />}
                    </Typography>
                </Grid>
                <Grid item>
                    <PathwayNav />
                </Grid>
                <Grid item xs>
                    <Image src={MLImage} imageStyle={{height: '100vh'}} />
                    <img src={MLImage} alt='Image' />
                </Grid>
                
                <Grid item xs={12} sm={10} >
                    
                    <Typography variant='h4'>
                        <Subheading text='Steps' />
                    </Typography>
                    {accordion}
                </Grid>

                <Grid item xs={12} md={10}>
                    
                </Grid>
            </Grid> */}
        </Grid>
    
    )
}