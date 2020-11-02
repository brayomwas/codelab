import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Stepper, Step, StepLabel, StepContent, Typography, Paper, Button, Checkbox, StepConnector } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
            {completed ? <Check className={classes.completed} /> :  <Checkbox checked={props.isChecked} onClick={props.handleChange} />}
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

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch(step) {
        case 0:
            return 'Select campaign settings...';
        case 1: 
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about';
        default:
            return 'Unknown step';
    }
}


export default function PathwayStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const [checked, setChecked] = useState(false);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = () => {
        setChecked((prevState) => !prevState);
    };

    return (
        <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep} connector={<QontoConnector />} orientation='vertical'>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon} StepIconProps={{isChecked:checked, handleChange: handleChange}}>
                            {label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
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