import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {MobileStepper, Button} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        width: '100%',
        flexGrow: 1,
    }
});

export default function Progress() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(10);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    return (
        <MobileStepper
            variant='progress'
            steps={6}
            position='static'
            activeStep={activeStep}
            className={classes.root}  
        />

        
    )
}