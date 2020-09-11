import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import  { Accordion , AccordionSummary, AccordionDetails, Typography, Grid }from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PathwayCard from "./PathwayCard";
import courses from '../data/courses.json';
import Udemy from '../images/Udemy Banner.png';
import Coursera from '../images/Coursera Banner.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  desc: {
    display: 'flex',
    flexDirection: 'column'
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
  },
  baseColor2: {
    color: '#3366CC'
  }
}));

export default function StepAccordion(props) {
  const classes = useStyles();
  // get courses data
  const recommendedCourses = courses.data.filter(course => course[3] === props.summary).slice(0, 3);
  console.log(recommendedCourses);

  // insert data into cards
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>
            {`Step ${props.step} ${props.summary}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <Typography>
            {props.description}
          </Typography>
          <Typography variant='h6' className={classes.baseColor2}>
            Recommended Courses
          </Typography>
          <Grid container direction='row' spacing={3}>
            {
              recommendedCourses.map(course => (
                <Grid item xs>
                  <PathwayCard title={course[5]} image={course[0] === 'Udemy'? Udemy : Coursera} buttonText='Get Started' linkDest='external' link={course[4]} />
                </Grid>
              ))
            }
            
          </Grid>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
