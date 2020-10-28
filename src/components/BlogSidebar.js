import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  blog__sidebar:{
    border:"1px solid",
    borderColor:"#d3d3d3",
    height:"500px",
    width:"250px",

  },
  input:{
    width:"contain",
    fontSize: "10px",
  },
}));

function BlogSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.blog__sidebar}>
      <div>
      <input type="text" placeholder="Search.."></input>
      </div>
       
    </div>
  )
}

export default BlogSidebar; 
