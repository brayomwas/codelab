import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import PopularBlogCard from "../components/PopularBlogCard";
import TrendingBlogCard from "../components/TrendingBlogCard";
import ExploreBlogCard from "../components/ExploreBlogCard"
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';





const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor:"#white",
    display:"transparent"
  },
  blogContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight:800,
    paddingBottom: theme.spacing(3)
  },
  cardFeature:{
    display:"flex"
  },
  mediaFeature:{
    maxWidth:"50%",
    display:"flex",
    flexDirection:"column"
  },
  mediaImg:{
    height:300,
    width:350 
  },
  contentFeature:{
    alignContent:"right",
    alignItems:"right",
    display:"flex",
    flexDirection:"column",
    justifyContent:"right"

  },
  card:{
    maxWidth:"100%"
  },
  media:{
    height:240
  },
  cardActions:{
    display:"flex",
    margin:"0 0 10px",
    justifyContent:"space-between"
  },
  author:{
    display:"flex"
  },
  mediaFeatureOther:{ 
  maxWidth:"50%",
  display:"flex",
  flexDirection:"column"
},
mediaOther:{
  height:150,
  width:150
}
}));

function Blog() {
  const classes = useStyles();

  return (
    <div className="blog">
      <h1>Explore Blogs</h1>
      
      <Box>
      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
          Featured
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FeaturedBlogCard />
            </Grid>




          </Grid>
      </Container>

      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
            Popular
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <PopularBlogCard />
            </Grid>

            <Grid item xs={6}>
              <PopularBlogCard />
            </Grid>
          </Grid>
      </Container>

      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
            Trending
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TrendingBlogCard />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TrendingBlogCard />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TrendingBlogCard />
            </Grid>
            
          </Grid>
          <Container maxwidth="lg" className={classes.blogContainer}>
          <Typography variant="h6" className={classes.blogTitle}>
            Explore Other Blogs
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ExploreBlogCard />
            </Grid>

            <Grid item xs={12}>
              <ExploreBlogCard />
            </Grid>

            <Grid item xs={12}>
              <ExploreBlogCard />
            </Grid>

            <Grid item xs={12}>
              <ExploreBlogCard />
            </Grid>

            <Grid item xs={12}>
              <ExploreBlogCard />
            </Grid>

            
            </Grid>
          </Container>
      </Container>
      </Box>
      
    </div>
  );
}

export default Blog;
