import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import PopularBlogCard from "../components/PopularBlogCard";
import TrendingBlogCard from "../components/TrendingBlogCard";
import ExploreBlogCard from "../components/ExploreBlogCard";
import BlogSidebar from "../components/BlogSidebar";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';





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
},
bottom__page:{
  display:"flex",
  
},
blog__sidebar:{
  paddingTop: theme.spacing(4)
},
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

          <div className={classes.bottom__page}>
            <div className={classes.explore__blogs}>
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
            </div>

            <div className={classes.blog__sidebar}>
              <BlogSidebar />
            </div>
          </div>
          
          

         
      </Container>
      </Box>
      
    </div>
  );
}

export default Blog;
