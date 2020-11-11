import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LabelIcon from '@material-ui/icons/Label';




const useStyles = makeStyles((theme) => ({
  DashboardCard: {
    display: "flex",
    margin:"20px 0px 20px",
  },
  dashboard__card: {

    maxWidth:"100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    border: "1px solid #d3d3d3"
  },
  tags: {
    backgroundColor: "#F6F6F6",
  },
  social__buttons:{
    display:"flex",
    justifyContent:"space-between",
  },
  author:{
    display:"flex",
    paddingLeft: '10px'
  },
}));


function DashboardCard() {
  const classes = useStyles();

  return (
    <div className={classes.DashboardCard}>
      <div className={classes.dashboard__card}>
        <p className={classes.tags}>Technology</p>
        <h3>Top 10 Programming Languages</h3>
        <p>
          <LabelIcon />
         </p>
        <div className={classes.social__buttons}>
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
          <div>
            <FavoriteBorderIcon />
            <ChatBubbleOutlineIcon />
            <BookmarkBorderIcon />
          </div>

          </div>
        </div>
      </div>
  )
}

export default DashboardCard;
