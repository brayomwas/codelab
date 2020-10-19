import React from "react";
// import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons'
import { Link } from "react-router-dom";
// import history from '../history'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <AppBar position='static' className={classes.appBar}>
    //     <Toolbar>
    //       <IconButton edge='start' className={classes.menuButton} color='inherit'>
    //         <Menu />
    //       </IconButton>
    //       <ul>
    //         <li><Link to='/'>Home</Link></li>
    //         <li><Link to='/courses'>Courses</Link></li>
    //         <li><Link to='/pathways'>Pathways</Link></li>
    //       </ul>
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <>
      <div className="navbar-fixed app-bar">
        <nav className="white">
          <div className="nav-wrapper">
            {/* <a href=""></a> */}
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/" className="black-text">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="black-text">Courses</Link>
              </li>
              <li>
                <Link to="/pathways" className='black-text'>
                  Pathways
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  );
}
