import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
}));


function DashboardCard() {
  const classes = useStyles();

  return (
    <div className={classes.DashboardCard}>
      <div className={classes.dashboard__card}>
        <p>Technology</p>
        <h6>Top 10 Programming Languages</h6>

      </div>
    </div>
  )
}

export default DashboardCard;
