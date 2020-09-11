import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
  mediaFeatureOther:{ maxWidth:"50%",
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
    <div className="App">
      
      
      <Box>
      <AppBar className={classes.appBar} positnion="static">
      
        <Toolbar>
          
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
          
        </Toolbar>
      </AppBar>

      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
          Featured
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className={classes.cardFeature}>
                  
                    <Box className={classes.mediaFeature}>
                      <CardMedia className={classes.mediaImg}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"                        
                        image="https://images.unsplash.com/photo-1594299751283-c2f793842a52?ixlib=rb-1.2.1&ix
                        eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                      />
                    </Box>
                    <CardActionArea>
                        <CardContent>
                          <Box className={classes.contentFeature}>
                            <Typography gutterBottom variant="h5" component="h2">
                              Top 10 Javascript Libraries
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                            </Box>
                        </CardContent>
                  
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
                    </CardActionArea>
                </Card>
            </Grid>




          </Grid>
      </Container>

      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
            Popular
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://images.unsplash.com/photo-1589988047635-39bf08b1720c?ixl
                      ib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80"
                      
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
            
            <Grid item xs={6}>
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
                      
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
          <Container maxwidth="lg" className={classes.blogContainer}>
          <Typography variant="h6" className={classes.blogTitle}>
            Explore Other Blogs
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Card className={classes.cardFeature}>
                  
                  <Box className={classes.mediaFeatureOther }>
                    <CardMedia className={classes.mediaOther}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"                        
                      image="https://images.unsplash.com/photo-1589988047635-39bf08b1720c?ixl
                      ib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80"
                    />
                  </Box>
                  <CardActionArea>
                      <CardContent>
                        <Box className={classes.contentFeature}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Top 10 Javascript Libraries
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                          </Box>
                      </CardContent>
                
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
                  </CardActionArea>
              </Card>


            </Grid>

            <Grid item xs={12}>
            <Card className={classes.cardFeature}>
                  
                  <Box className={classes.mediaFeatureOther }>
                    <CardMedia className={classes.mediaOther}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"                        
                      image="https://images.unsplash.com/photo-1589988047635-39bf08b1720c?ixl
                      ib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80"
                    />
                  </Box>
                  <CardActionArea>
                      <CardContent>
                        <Box className={classes.contentFeature}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Top 10 Javascript Libraries
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                          </Box>
                      </CardContent>
                
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
                  </CardActionArea>
              </Card>


            </Grid>
            <Grid item xs={12}>
            <Card className={classes.cardFeature}>
                  
                  <Box className={classes.mediaFeatureOther }>
                    <CardMedia className={classes.mediaOther}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"                        
                      image="https://images.unsplash.com/photo-1598467829413-e58f9288dd34?ixlib=rb-1.2.1&ixid=eyJhcHBfa
                      WQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    />
                  </Box>
                  <CardActionArea>
                      <CardContent>
                        <Box className={classes.contentFeature}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Top 10 Javascript Libraries
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                          </Box>
                      </CardContent>
                
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
                  </CardActionArea>
              </Card>


            </Grid>
            <Grid item xs={12}>
            <Card className={classes.cardFeature}>
                  
                  <Box className={classes.mediaFeatureOther }>
                    <CardMedia className={classes.mediaOther}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"                        
                      image="https://images.unsplash.com/photo-1589988047635-39bf08b1720c?ixl
                      ib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80"
                    />
                  </Box>
                  <CardActionArea>
                      <CardContent>
                        <Box className={classes.contentFeature}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Top 10 Javascript Libraries
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                          </Box>
                      </CardContent>
                
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
                  </CardActionArea>
              </Card>


            </Grid>
            <Grid item xs={12}>
            <Card className={classes.cardFeature}>
                  
                  <Box className={classes.mediaFeatureOther }>
                    <CardMedia className={classes.mediaOther}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"                        
                      image="https://images.unsplash.com/photo-1598346676061-628d28d47ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfa
                      WQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    />
                  </Box>
                  <CardActionArea>
                      <CardContent>
                        <Box className={classes.contentFeature}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Top 10 Javascript Libraries
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                          </Box>
                      </CardContent>
                
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
                  </CardActionArea>
              </Card>


            </Grid>
            </Grid>
          </Container>
      </Container>
      </Box>
      
    </div>
  );
}

export default Blog;
