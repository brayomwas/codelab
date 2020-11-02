import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  individualblog__sidebar:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    height:"600px",
    width:"300px",
    padding:"20px",
    border:"1px solid #d3d3d3",
    borderRadius:"3px",
    backgroundColor:"#white",
  },

  sidebar__search:{
    display:"flex",
  },
  sidebar__searchInput:{
    height:"12px",
    padding:"10px",
    borderColor:"#d3d3d3",
    width:"100%",
  },
  sidebar__searchIcon:{
    // padding:"5px",
    height:"62px"
  },
  categories:{
    

  },
  form__inputName:{
    width:"100%",
    padding:"12px",
    margin:"8px 0",
    display:"inline-block",
    border:"1px solid #ccc",
    boxSizing:"border-box",
  },
}));

function IndividualBlogSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.individualblog__sidebar}>
      <div className={classes.sidebar__search}>
        <input
        className={classes.sidebar__searchInput} 
        type="text" 
        placeholder="Search.. "  />
        <SearchIcon className={classes.sidebar__searchIcon} />
      </div>

      <div className={classes.categories}>
        <h5>Categories</h5>
        <p>Python</p>
        <p>Javascript</p>
        <p>React</p>
        <p>Machine Learning</p>
        <p>Interviews</p>
      </div>

      <div className={classes.newsletter}>
        <h5>Join our Newsletter</h5>
        <div className={classes.form__input}>
          <input className={classes.form__inputName} type="text" placeholder="Name" name="name" required />
          <input className={classes.form__inputEmail} type="text" placeholder="Email address" name="mail" required />
        </div>
        <div>
          <input type="submit" value="Subscribe" />
        </div>
        
      </div>
      <div>
          <h5>Quick Links</h5>
            <p>View Bookmarks</p>
            <p>Contribute Blogs</p>
        </div>
       
    </div>
  )
}

export default IndividualBlogSidebar; 
