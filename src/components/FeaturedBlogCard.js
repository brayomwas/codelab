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
  cardFeature:{
    display:"flex"
  },
  mediaFeature:{
    maxWidth:"50%",
    display:"flex",
    flexDirection:"column"
  },
  mediaImg:{
    width:500,
    height:500,
    borderRadius: 0
  },
  contentFeature:{
    alignContent:"right",
    alignItems:"right",
    display:"flex",
    flexDirection:"column",
    justifyContent:"right"

  }, cardActions:{
    display:"flex",
    margin:"0 0 10px",
    justifyContent:"space-between"
  },
  author:{
    display:"flex"
  },
}));

function Featuredblogcard() {
  const classes = useStyles();

  return (
    <div className="featuredblogcard">
      <Link to="/individualBlog">
      <Card className={classes.cardFeature}>
      <Box className={classes.mediaFeature}>
        <CardMedia className={classes.mediaImg}
          component="img"
          alt=""
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
      
      </Link>
      
                
    </div>
  )
}

export default Featuredblogcard;

