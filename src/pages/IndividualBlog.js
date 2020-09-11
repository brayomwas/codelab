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



const useStyles = makeStyles((theme) => ({
    
  }));
  function IndividualBlog() {
    const classes = useStyles();
  
    return (
      <div className="App">
        
        
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
  