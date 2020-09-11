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

 



const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3)
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
  }
  }));
  function IndividualBlog() {
    const classes = useStyles();
  
    return (
      <div className="App">
        
        <Container maxwidth="lg" className={classes.blogContainer}>
          <Box>
            <Typography className={classes.blogHeader} variant="h2" align="center">
              Top 10 Javascript Libraries
            </Typography>
            <img src="https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid
            =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"> 
            </img>
          </Box>
        </Container>
        <Container className={classes.date}>
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
                      <TwitterIcon />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h5">
                    Programmers are in high demand these days--their fluency in coding language is invaluable.
                    Knowing various programming languages is a no-brainer for engineers, but a basic understanding of the languages
                    can benefit anyone, even if you're not looking to become a master coder. Grasping some general understanding 
                    of coding can help you make the right hires for your business needs, communicate better with the engineers on 
                    your team, and prevent any awkward misunderstandings (Ruby isn't a gem, and Java isn't an excellent cup of coffee). 
                    Plus, with the high salaries earned for coding, you might want to consider it for a future career move! So what do you 
                    need to know?

                    Here are the 10 most popular programming languages:

                    1. Java
                    Java is top pick as one of the most popular programming languages, used for building server-side applications to 
                    video games and mobile apps. It's also the core foundation for developing Android apps, making it a favorite of many 
                    programmers. With its WORA mantra (write once, run anywhere), it's designed to be portable and run happily across 
                    multiple software platforms. I first got started with Java server programming back in 1999--it was so exciting, I 
                    actually wrote a few books about it. Java is everybody's pal!

                    2. Python
                    Python is a one-stop shop. There's a Python framework for pretty much anything, from web apps to data analysis. In fact, 
                    WordStream is written in Python! You're the best bud. Python is often heralded as the easiest programming 
                    language to learn, with its simple and straightforward syntax. Python has risen in popularity due to 
                    Google's investment in it over the past decade (in fact, one recent study has shown Python to be the most 
                    commonly taught programming language in U.S. schools). Other applications built with Python include 
                    Pinterest and Instagram.

                    3. C
                    If you saw C on a report card, you'd be pretty bummed. Maybe a bit confused, too (is it actually a B-?). 
                    However, C is not the bizarrely bad grade it seems to be. It's often the first programming language taught in 
                    college (well, it was for me 10 years ago). I thought it was a nice "in-between" language in that it was object 
                    oriented without having to be fanatical about it. It was also low level enough to be close to hardware, 
                    but no so low level that you had to do everything manually. Because there are so many C compilers, you can 
                    write stuff in C and have it run pretty much anywhere.

                    4. Ruby
                    Ruby (also known as Ruby on Rails) is a major supplier of web apps. Ruby is popular due to its ease of learning (it's very straightforward) and power. Ruby knowledge is in high demand these days!

                    5. JavaScript
                    JavaScript (which, confusingly, is not at all related to Java) is another favorite programming language because 
                    it's so ubiquitous on the web--it's basically everywhere. JavaScript allows developers to add interactive 
                    elements to their website, and its presence is felt across the internet. At WordStream, we use a JavaScript 
                    library called JQuery to make our JavaScript work even easier.

                    6. C#
                    C# (pronounced C-sharp, not C-hashtag for you Twitter fans) is the language used in order to develop Microsoft 
                    apps. C# is syntactically nearly identical to Java. I've spent much time training with C#, but if you're good 
                    at Java, you'll likely have an easy time jumping onto C#. If you're looking to work on Microsoft apps, C# is 
                    the way to go. C# opens a lot of Windows (har-har).

                    7. PHP
                    PHP (which stands for Hypertext Preprocessor, if you care to know) is often used in conjunction with dynamic 
                    data-heavy websites and app development. It provides a ton of power and is the beating heart of monster sites 
                    like WordPress and Facebook. What's really cool about PHP is that it's an open-source language, so there are 
                    tons of free pre-built modules that you can grab and modify to get your ideal results. PHP is also on the easy 
                    end of the learning spectrum, simply requiring you to embed the code within HTML. PHP is a must-learn language 
                    for aspiring web developers.

                    8. Objective-C
                    Objective-C is the programming language behind iOS apps. Apple's new language Swift is rising in the ranks, 
                    but Objective-C is still the recommended starting point for those looking to craft Apple apps for iPhones and 
                    iPads. Next stop--the iOS App Store!

                    9. SQL
                    SQL is a database query language (SQL stands for Structured Query Language) that's ideal when talking big data. 
                    SQL lets you siphon helpful data from massive databases. Nearly every app has a backend database, and SQL is the 
                    language that helps you interact with that sweet data. In terms of software development, SQL isn't ever used 
                    alone--rather, you invoke SQL from some other programming knowledge and you have yourself a nice package deal.

                    10. C 
                    C is the predecessor to more complex programming languages like Java and C#. C is best when you want to work small 
                    and when dealing with low-level applications. It's widely used for embedded systems like the firmware of your 
                    television or the operating system of an airplane, as well as computer operating systems like Windows. For me 
                    personally, C was more of an academic language. It was nice to learn how to write a kernel back in college, 
                    and you gain a more solid understanding of how newer languages work under the covers, but it's rare for most 
                    application developers to ever have to use this today.

                    There you have it--the king languages of coding. What's your programming language of choice and why? 
                    If you're a newbie looking to dive into coding, take a look at these nine spots on the web where you can learn to 
                    code (for free)! You'll be a code master in no time.

                  
                    Editorial Disclosure: Inc. writes about products and services in this and other articles. 
                    These articles are editorially independent - that means editors and reporters research and write on these products 
                    free of any influence of any marketing or sales departments. In other words, no one is telling our reporters or 
                    editors what to write or to include any particular positive or negative information about these products or 
                    services in the article. The article's content is entirely at the discretion of the reporter and editor. 
                    You will notice, however, that sometimes we include links to these products and services in the articles. 
                    When readers click on these links, and buy these products or services, Inc may be compensated. 
                    This e-commerce based advertising model - like every other ad on our article pages - has no impact on our editorial 
                    coverage. Reporters and editors don't add those links, nor will they manage them. This advertising model, like 
                    others you see on Inc, supports the independent journalism you find on this site.
                    </Typography>
                  </Box>
    </Container>
        <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
            Trending
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
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
        
      </div>
    );
  }
  
  export default IndividualBlog;
  