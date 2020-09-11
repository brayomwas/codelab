import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import history from '../history'

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
  },
});

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
              variant="outlined"
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
        <Button variant='outlined' color='primary' href={props.link}>
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
