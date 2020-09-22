import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
  challengeHeader:{
    textAlign:"center"
  },
  individualChallenge:{
    display:"flex",
  },

  individualLeft:{
    display:"flex",
  },

  description:{
    backgroundColor:"#f6f6f6",
    width:"700px",
    height:"700px"

  },

  individualRight:{
    display:"flex",
    flexDirection:"column"
  },

  codeEditor:{
    margin:"20px"
  },

  codeTester:{
margin:"20px"
  }
}));

function IndividualChallenge() {
  const classes = useStyles();

    return (
        <div>
          <Typography variant="h3" className={classes.challengeHeader}>
            Challenge Name
          </Typography>
          
            <div className={classes.individualChallenge}>
            
            <Container className={classes.description}>
              <div className={classes.challengeleft} >
                <Typography variant="h4" >
                  Description
                </Typography>

                <Typography variant="h6" >
                  Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since 
                  the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen 
                  book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised 
                  in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, and more recently 
                  with desktop publishing software like Aldus 
                  PageMaker including versions of Lorem Ipsum.
                </Typography>

              </div>
            </Container>

              <div className={classes.individualRight}>
                <Container>
                  <Card className={classes.codeEditor}>
                    <CardContent>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since 
                      the 1500s, when an unknown printer took a galley 
                      of type and scrambled it to make a type specimen 
                      book. It has survived not only five centuries, 
                      but also the leap into electronic typesetting, 
                      remaining essentially unchanged. It was popularised 
                      in the 1960s with the release of Letraset sheets 
                      containing Lorem Ipsum passages, and more recently 
                      with desktop publishing software like Aldus 
                      PageMaker including versions of Lorem Ipsum.                  
                    </CardContent>
                  </Card>

                  <Card className={classes.codeTester}>
                    <CardContent>
                      in the 1960s with the release of Letraset sheets 
                      containing Lorem Ipsum passages, and more recently 
                      with desktop publishing software like Aldus 
                      PageMaker including versions of Lorem Ipsum.   
                    </CardContent>
                  </Card>
                </Container>
              </div>
            </div>
              
        </div>
    )
}

export default IndividualChallenge
