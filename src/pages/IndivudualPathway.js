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

// create state for holding component data
// contents of state: page title(string), accordion details(object)

const useStyles = makeStyles({
    step: {
        marginTop: '500px'
    },
    heading: {
        color: '#000000'
    },
})

export default function IndividualPathway(props) {
    
    // const [ title, setTitle ] = useState('');
    // const [ accordionDetails, setAccordionDetails ] = useState({});
    const individualPathway = props.data.find(pathway => pathway.pathway === props.match.params.individualPathway);
    console.log(individualPathway.data);
    const classes = useStyles();
    //all pathways data
    // const props.data = pathways.map((pathway) => {
    //     return {
    //         pathway: pathway.pathway,
    //         step: pathway.data.map(step => step.pathwayModule),
    //         description: pathway.data.map(step => step.description)
    //     }
    // });
    
    
    let accordion = [];

    //render Accordion according to the title of the card

    // for ( let i = 0; i < props.data.length; i++) {
    //     for ( let j = 0; j < 10; j ++) {
    //         // console.log(props.data[i].step[j]);
    //         // console.log(props.data[i].description[j]);
    //         // console.log(props.data[i].pathway)
    //         if (props.data[i].pathway === 'Data Science'){
    //             accordion.push(<StepAccordion 
    //                 summary={props.data[i].step[j]}
    //                 description={props.data[i].description[j]}
    //                 step={j + 1}
    //                 title='A' />)
    //         }
                
    //     }
        
    // }
    for (let i = 0; i < individualPathway.data.length; i++) {
        accordion.push(<StepAccordion
            summary={individualPathway.data[i].pathwayModule}
            description={individualPathway.data[i].description}
            step={i + 1}
            title={'A'}
            />)
    }

    return(
        <Grid container spacing={3}>
            {/* <Grid item>
                <SideBar />
            </Grid> */}
            <Grid item container xs direction='column'>
                <Grid item>
                    <Typography>
                        {<DocumentHeading text={individualPathway.pathway} />}
                    </Typography>
                </Grid>
                <Grid item>
                    <PathwayNav />
                </Grid>
                <Grid item xs>
                    <Image src={MLImage} imageStyle={{height: '60vh'}} />
                    {/* <img src={MLImage} alt='Image' /> */}
                </Grid>
                <Grid item xs >
                   <Subheading text='Steps' />
                    
                </Grid>
                <Grid item xs={12} sm={10} className={classes.step}>
                    {/* Steps accordion */}
                    {accordion}
                </Grid>
            </Grid>
        </Grid>
    
    )
}