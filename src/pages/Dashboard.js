import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DocumentHeading from '../components/DocumentHeading';
import DashboardCard from '../components/DashboardCard';



const useStyles = makeStyles((theme) => ({
}));


function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <DocumentHeading text="Welcome back, Cabral" />
      <div className={classes.dashboard__main}>
        <DashboardCard />
      </div>

      <div className={classes.dashboard__sidebar}>

      </div>

    </div>
  )
}

export default Dashboard;
