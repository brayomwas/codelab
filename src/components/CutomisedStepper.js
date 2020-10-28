// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import { Stepper, Step, StepLabel, StepConnector, Button, Typography } from '@material-ui/core';
// import { Check, Settings, GroupAdd, VideoLabel } from '@material-ui/icons';

// const QontoConnector = withStyles({
//     alternativeLabel: {
//         top: 10,
//         left: 'calc(-50% + 16px)',
//         right: 'calc(50% + 16px',
//     },
//     active: {
//         '& $line': {
//             borderColor: '#784af4',
//         },
//     },
//     completed: {
//         '& $line': {
//             borderColor: '#784af4'
//         },
//     },
//     line: {
//         borderColor: '#eaeaf0',
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// })(StepConnector);

// export default function QontoStepIcon(props) {
//     const classes = useQontoStepIconStyles();
//     const [active, completed] = props;

//     return (
//         <div
//             className={clsx(classes.root, {
//                [classes.active]: active, 
//             })}
//             >
//                 {completed ? <Check /> : <div />}
//         </div>
//     )
// }

