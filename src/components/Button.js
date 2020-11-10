import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import history from '../history'

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    // background: "#3366cc",
    // '&:hover': {
    //   background: "#011638",
    // },
    background: theme.palette.primary.main,
    '&:hover': {
        background: theme.palette.secondary.main,
    },
    paddingBottom: 10,
    paddingTop: 10,
    color: '#fff',
  },
}));

function ButtonRouter(props) {
  const classes = useStyles();
//   console.log(props.match);
// render button conditionally, according to linkDest props
  let button;
  if (props.linkDest === 'internal') {
      button= (
        <Router>
          <div>
            <Button
              variant={props.variant}
              color="primary"
              className={classes.button}
              component={LinkBehavior}
              to={ `${props.match.url}/${props.text}`}
              onClick={() => props.history.push(`${props.match.url}/${props.text}`)}
            >
              <Typography>{props.buttonText}</Typography>
            </Button>
    
            <br />
          </div>
        </Router>
      )
      
  } else if (props.linkDest === 'external') {
      button = (
        <Button variant={props.variant} color='primary' href={props.link} className={classes.buttonText}>
            <Typography>{props.buttonText}</Typography>
        </Button>
      )
  }
  return (
      <div>
        {button}
      </div>
      
  )
  
}

export default withRouter(ButtonRouter);
