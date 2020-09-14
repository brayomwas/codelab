import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

 



const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3),
    alignContent:"right"
  },
  blogTitle: {
    fontWeight:800,
    paddingBottom: theme.spacing(3)
  },
  author:{
    display:"flex"
  },
  media:{
    height:240
  },
  cardActions:{
    display:"flex",
    margin:"0 0 10px",
    justifyContent:"space-between"
  },
  card:{
    maxWidth:"100%"
  },
  date:{
    paddingTop:"40px"
  },
  blogHeader:{
    paddingBottom:"40px"
  },
 
   
  

  
  }));
  function IndividualBlog() {
    const classes = useStyles();
  
    return (
      <div className="App">
        <Container  className={classes.blogContainer}>
          <Container  className={classes.blogContainer}>
            <Box>
              <Typography className={classes.blogHeader} variant="h2">
                Top 10 Javascript Libraries
              </Typography>
                <Box className={classes.banner}>
                 
                    <img src="https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid
                    =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  
                    alt="banner"
                    width="1200px"
                    
                    /> 
                  
                </Box>
            </Box>
          </Container>

          <Container className={classes.date}>
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

            <Box>
              <BookmarkBorderIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
          </Box>
                    
          <Box paddingTop="30px">
            <Typography variant="h5">
              Programmers are in high demand these days--their fluency in coding language is invaluable.
              Knowing various programming languages is a no-brainer for engineers, but a basic understanding of the languages
              can benefit anyone, even if you're not looking to become a master coder. Grasping some general understanding 
              of coding can help you make the right hires for your business needs, communicate better with the engineers on 
              your team, and prevent any awkward misunderstandings (Ruby isn't a gem, and Java isn't an excellent cup of coffee). 
              Plus, with the high salaries earned for coding, you might want to consider it for a future career move! So what do you 
              need to know?

              Here are the 10 most popular programming languages:
            </Typography>

            
            <h4>1. Java</h4>
              <Typography variant="h5">
                Java is top pick as one of the most popular programming languages, used for building server-side applications to 
                video games and mobile apps. It's also the core foundation for developing Android apps, making it a favorite of many 
                programmers. With its WORA mantra (write once, run anywhere), it's designed to be portable and run happily across 
                multiple software platforms. I first got started with Java server programming back in 1999--it was so exciting, I 
                actually wrote a few books about it. Java is everybody's pal!
              </Typography>

            
            <h4>2. Python</h4>
              <Typography variant="h5">
                Python is a one-stop shop. There's a Python framework for pretty much anything, from web apps to data analysis. In fact, 
                WordStream is written in Python! You're the best bud. Python is often heralded as the easiest programming 
                language to learn, with its simple and straightforward syntax. Python has risen in popularity due to 
                Google's investment in it over the past decade (in fact, one recent study has shown Python to be the most 
                commonly taught programming language in U.S. schools). Other applications built with Python include 
                Pinterest and Instagram.
              </Typography>

            
              <h4>3. C</h4>
              <Typography variant="h5">
                If you saw C on a report card, you'd be pretty bummed. Maybe a bit confused, too (is it actually a B-?). 
                However, C is not the bizarrely bad grade it seems to be. It's often the first programming language taught in 
                college (well, it was for me 10 years ago). I thought it was a nice "in-between" language in that it was object 
                oriented without having to be fanatical about it. It was also low level enough to be close to hardware, 
                but no so low level that you had to do everything manually. Because there are so many C compilers, you can 
                write stuff in C and have it run pretty much anywhere.
             </Typography>

            
            <h4>4. Ruby</h4>
              <Typography variant="h5">
                Ruby (also known as Ruby on Rails) is a major supplier of web apps. Ruby is popular due to its ease of learning 
                (it's very straightforward) and power. Ruby knowledge is in high demand these days!
              </Typography>

            
            <h4>5. JavaScript</h4>
            <Typography variant="h5">
              JavaScript (which, confusingly, is not at all related to Java) is another favorite programming language because 
              it's so ubiquitous on the web--it's basically everywhere. JavaScript allows developers to add interactive 
              elements to their website, and its presence is felt across the internet. At WordStream, we use a JavaScript 
              library called JQuery to make our JavaScript work even easier.
            </Typography>


          </Box>
        </Container>

        <Container maxwidth="lg" className={classes.blogContainer} paddingTop="70px">
          <Typography variant="h3" className={classes.blogTitle}>
            Trending
          </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}
                      component="img"
                      alt=""
                      height="140"
                      image="https://images.unsplash.com/photo-1581093448798-fa7eab922c96?ixlib=rb-1.2.1&ix
                      id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                      
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Top 10 Javascript Libraries
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions className={classes.cardActions}>
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

                      <Box>
                        <BookmarkBorderIcon />
                      </Box>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.unsplash.com/photo-1593694605442-1168e359fc2e?ixlib=rb-1.2.1&ixid=
                    eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  />
                    
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Top 10 Javascript Libraries
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                  
                <CardActions className={classes.cardActions}>
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
                      
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
              
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ix
                    d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  />
                    
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Top 10 Javascript Libraries
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
                <CardActions className={classes.cardActions}>
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
                      
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        </Container>
      </div>
    );
  }
  
  export default IndividualBlog;
  