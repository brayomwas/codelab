import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DocumentHeading from '../components/DocumentHeading';
import IndividualBlogSidebar from "../components/IndividualBlogSidebar";
import TrendingBlogCard from "../components/TrendingBlogCard";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

 



const useStyles = makeStyles((theme) => ({
  blog__post:{
    display:"flex",
  },
  text__container:{
    maxWidth:"1000px",
    // padding:"20px",
    border:"1px solid #d3d3d3",
    borderRadius:"5px",
    backgroundColor:"#white",
    
  },
  banner:{
    borderRadius:"5px",
    objectFit:"cover",
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
    alignContent:"right",
  },
  blogTitle: {
    fontWeight:800,
    paddingBottom: theme.spacing(3)
  },
  author:{
    display:"flex"
  },
  date:{
    paddingTop:"20px"
  },
  blogHeader:{
    paddingBottom:"40px"
  },
  individualblog__sidebar:{
    paddingTop: theme.spacing(3),
    marginLeft:"20px"
  },
 
   
  

  
  }));
  function IndividualBlog() {
    const classes = useStyles();
  
    return (
      <div className="individual__blog">
        <div className={classes.blog__post}>
        <div  className={classes.text__container}>

<img
  className={classes.banner} 
  src="https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid
  =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  
  alt="banner"
  // maxWidth="900px"
/> 

<DocumentHeading text="Top 10 Javascript Libraries" />  
{/* <Container className={classes.date}> */}
<Box className={classes.author}>
  <Avatar 
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?
  ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  />
            
  <Box ml={2} >
    <Typography variant="subtitle2" component="p">
      Cabral Chege
    </Typography>
    <Typography variant="subtitle2" color="textSecondary" component="p">
      January 16,2020
    </Typography>    
  </Box>

  {/* <Box>
    <BookmarkBorderIcon />
    <TwitterIcon />
    <InstagramIcon />
  </Box> */}
</Box>
          
{/* <Box paddingTop="30px"> */}
<p>Programmers are in high demand these days--their fluency in coding language is invaluable.
    Knowing various programming languages is a no-brainer for engineers, but a basic understanding of the languages
    can benefit anyone, even if you're not looking to become a master coder. Grasping some general understanding 
    of coding can help you make the right hires for your business needs, communicate better with the engineers on 
    your team, and prevent any awkward misunderstandings (Ruby isn't a gem, and Java isn't an excellent cup of coffee). 
    Plus, with the high salaries earned for coding, you might want to consider it for a future career move! So what do you 
    need to know?

    Here are the 10 most popular programming languages:
  </p>
  <h5>1. Java</h5>
    <p>
      Java is top pick as one of the most popular programming languages, used for building server-side applications to 
      video games and mobile apps. It's also the core foundation for developing Android apps, making it a favorite of many 
      programmers. With its WORA mantra (write once, run anywhere), it's designed to be portable and run happily across 
      multiple software platforms. I first got started with Java server programming back in 1999--it was so exciting, I 
      actually wrote a few books about it. Java is everybody's pal!
    </p>
  <h5>2. Python</h5>
    <p>
      Python is a one-stop shop. There's a Python framework for pretty much anything, from web apps to data analysis. In fact, 
      WordStream is written in Python! You're the best bud. Python is often heralded as the easiest programming 
      language to learn, with its simple and straightforward syntax. Python has risen in popularity due to 
      Google's investment in it over the past decade (in fact, one recent study has shown Python to be the most 
      commonly taught programming language in U.S. schools). Other applications built with Python include 
      Pinterest and Instagram.
    </p>
  <h5>3. C</h5>
    <p>If you saw C on a report card, you'd be pretty bummed. Maybe a bit confused, too (is it actually a B-?). 
      However, C is not the bizarrely bad grade it seems to be. It's often the first programming language taught in 
      college (well, it was for me 10 years ago). I thought it was a nice "in-between" language in that it was object 
      oriented without having to be fanatical about it. It was also low level enough to be close to hardware, 
      but no so low level that you had to do everything manually. Because there are so many C compilers, you can 
      write stuff in C and have it run pretty much anywhere.
    </p>

{/* </Box> */}
{/* </Container> */}
</div>

<div>
<IndividualBlogSidebar />
</div>
        </div>
        
        <Container maxwidth="lg" className={classes.blogContainer} paddingTop="70px">
          <Typography variant="h3" className={classes.blogTitle}>
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
        </Container>
    
      </div>
    );
  }
  
  export default IndividualBlog;
  