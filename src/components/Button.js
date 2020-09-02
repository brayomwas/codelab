import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink, withRouter, Redirect } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import history from '../history'

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref}  { ...props} />
));

const useStyles = makeStyles({
    button: {
        display: 'flex',
        justifyContent: 'center'
    },
})

function ButtonRouter(props) {
    const classes = useStyles();
    return (
        <Router>
            <div>
                
                    <Button
                         variant='outlined'
                         color='primary' 
                         className={classes.button} 
                         component={LinkBehavior} 
                         to={`${props.match.url}/${props.text}`}
                         onClick={() => props.history.push(`${props.match.url}/${props.text}`)}>
                        <Typography >Explore</Typography>
                    </Button> 
                
                
                <br />
            </div>
        </Router>
    )
}

export default withRouter(ButtonRouter)