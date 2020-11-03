import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  card:{
    maxWidth:"100%"
  },
  media:{
    height:240,
    borderRadius: 0,
  },
  cardActions:{
    display:"flex",
    margin:"0 0 10px",
    justifyContent:"space-between"
  },
  author:{
    display:"flex",
    paddingLeft: '10px'
  },
}));

function PopularBlogCard() {
  const classes = useStyles();

  return (
    <div className="popular__blogCard">
      <Link to="/individualBlog">
      <Card className={classes.card} variant='outlined'>
        {/* <CardActionArea> */}
          <CardMedia className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.unsplash.com/photo-1589988047635-39bf08b1720c?ixl
            ib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80"
          />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="h2">
                        Python Resources – Explore Pathways and Best Learning Resources 2020
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  {/* </CardActionArea> */}
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
      </Link>
      
    </div>
  )
}

export default PopularBlogCard;
