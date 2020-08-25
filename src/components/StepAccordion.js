import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CourseCard from './CourseCard'
import CardHeading from './CardHeading'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function StepAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography className={classes.heading}>Introduction to Python</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <CardHeading text="Course Recs" />
                        </Typography>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Introduction to SciPy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto maiores, magni dicta provident nihil praesentium nobis necessitatibus repudiandae beatae velit aspernatur ullam. Perspiciatis est et beatae repudiandae odio. Deleniti, ut?
                    </Typography>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Introduction to Keras</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illum sunt libero architecto animi at quos, illo quia amet qui vitae expedita temporibus reprehenderit id recusandae earum esse! Pariatur, quis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}