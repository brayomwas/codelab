import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Stepper, Step, StepLabel, StepContent, Typography, Paper, Button, Checkbox, StepConnector, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PathwayCard from './PathwayCard';
import courses from '../data/courses.json';
import Udemy from '../images/Udemy Banner.png';
import Coursera from '../images/Coursera Banner.jpg';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active:{
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const {  active, completed } = props;
    // const [checked, setChecked] = useState(false);

    // const handleChange = () => {
    //     setChecked((prevState) => !prevState);
    // }
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> :  <Checkbox checked={props.isChecked} id={props.id} onClick={props.handleChange} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2)
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function PathwayStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const [checked, setChecked] = useState(false);
    const steps = getSteps();
 

    function getSteps() {
        return props.pathwayData.map((step) => step.pathwayModule);
    }

    function getStepContent(step) {
        return props.pathwayData.map((step) => step.description)[step]
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = (event) => {
        console.log(event.target.checked)
        setChecked((prevState) => !prevState);
    };

    const handleClick = (step) => () => {
        setActiveStep(step)
    }

    return (
        <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep} connector={<QontoConnector />} orientation='vertical'>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon} StepIconProps={{isChecked:checked, handleChange: handleChange, id: index}} onClick={handleClick(index)}>
                            {label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                {courses.data.filter((course) => course[3] === label ).slice(0, 3).map((selectedCourse) => (
                                    <Grid md={3}>
                                         <PathwayCard title={selectedCourse[5]} image={selectedCourse[0] === 'Udemy' ? Udemy : Coursera} buttonText='Get Started' linkDest='externa' link={selectedCourse[4]} />
                                    </Grid>
                                   
                                ))}
                            </div>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button 
                                        variant='contained'
                                        color='primary'
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevetion={0} className={classes.resetContainer}>
                    <Typography>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
            
        </div>
    )
}