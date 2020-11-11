import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  author: {
    display: "flex",
    paddingLeft: '10px'
  },
}));


function SidebarProfileCard() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar__profileCard}>
      <div>
        <Box className={classes.author}>
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?
                ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              Cabral Chege
                </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              January 16,2020
                </Typography>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default SidebarProfileCard;