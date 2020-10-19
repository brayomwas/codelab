import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0: 
            return `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, voluptas. Facilis, numquam voluptatem ut cum recusandae soluta assumenda eius eum minus autem voluptatibus vel fugit modi quo nemo at quasi officia accusantium, ipsum ipsam nulla molestiae? Maiores eligendi maxime at?`;
        case 1: 
            return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nisi.`;
        case 2: 
            return `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum expedita consequatur soluta dolorem nam repellendus blanditiis illo accusamus nostrum eligendi, non in fugiat ea officiis.`;
        default: 
            return `Unknown Step`;
    }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [ activeStep, setActiveStep ] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>
                                {getStepContent(index)}
                            </Typography>
                            <div>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}>
                                            Back
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={handleNext}
                                        className={classes.button}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>
                        All steps completed
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                    
                </Paper>
            )}
        </div>
    );

}