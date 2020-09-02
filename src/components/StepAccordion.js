import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import  { Accordion , AccordionSummary, AccordionDetails, Typography, Grid }from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CourseCard from "./CourseCard";
import CardHeading from "./CardHeading";
import PathwayCard from "./PathwayCard";

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
  }
}));

export default function StepAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {`Step ${props.step} ${props.summary}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <Typography>
            {/* <CardHeading text="Course Recs" /> */}
            {props.description}
          </Typography>
          <Grid container direction='row' spacing={3}>
            <Grid item xs>
               <PathwayCard title={props.title} />
            </Grid>
            
            <Grid item xs>
               <PathwayCard title={props.title} />
            </Grid>

            <Grid item xs>
               <PathwayCard title={props.title} />
            </Grid>
          </Grid>
          {/* <div className={classes.cards}>
            <CourseCard heading={props.heading} platform={props.platform} title={props.title} link={props.link} />
            <CourseCard heading={props.heading} platform={props.platform} title={props.title} link={props.link} />
          </div> */}
          
          {/* <CourseCard heading={} platform={} title={} link={} />
          <CourseCard heading={} platform={} title={} link={} /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
