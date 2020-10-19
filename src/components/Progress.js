import React, { useState  } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },

});

export default function ProgressMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <MobileStepper
            variant='progress'
            steps={10}
            position='static'
            activeStep={activeStep}
            className={classes.root}
            nextButton={
                <Button size='small' onClick={handleNext} disabled={activeStep === 9}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>


            }
            backButton={
                <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            }>
{/* acha tu ni type ata kama stype kitu ya maana ndio angalau nikae kama natype kitu  
I will be a great man!!!
Very successful!!!:-)
It starts now, 
I will move out by January to go to Kitisuru or Roysambu */}
        </MobileStepper>
    )
}