import React, { useEffect, useState, version } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import 
{ 
  Card, 
  CardContent,
  Container,
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  Tabs,
  Tab } from '@material-ui/core';
 



const useStyles = makeStyles((theme)=>({
  individualChallenge:{
    display:"flex",
    flex:0.4
  },

  challengeLeft:{
    flex:0.3
    
  },

  metas:{
    display:"flex",
  },
  
  date:{
    display:"flex",
    paddingRight:"",
  },

  // Description Navigation
  descriptionNav: {
    flexGrow: 1,
    maxWidth: "100%",
  },

  challengeDescription:{
    height:"500px",
    overflowY:"scroll",
    padding:"20px",
  },

challengeRight:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-end",
},

  buttons:{
    display:"flex",
    margin:"15px 15px",
    
  },
  language__dropdown:{
    position:"relative",
   display:"inlineBlock",
    
  },
  FormControl:{

  },

  Button:{
    
  },

  editor:{
    flex:1,
    height:"500px",
    
  },

}));

function IndividualChallenge() {
  const classes = useStyles();

  const [tab, setTab] = useState (0);
  const [language, setLanguage] = useState(['language']);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };


    return (
        <div className={classes.individualChallenge}>
          <div className={classes.challengeLeft}>
            <Typography variant="h3" className={classes.challengeName}>
              Challenge Name
            </Typography>

            <Box className={classes.metas}>
              <Box>
                <AccountCircleIcon />
              </Box>
              <Box className={classes.date}>
                <CalendarTodayIcon  />
                <Typography>10/07/2020</Typography>
              </Box>
              <Box>
                
              </Box>
            </Box>

            <Card>
              <Paper square className={classes.descriptionNav}>
                <Tabs
                  value={tab}
                  onChange={handleChange}
                  variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="icon label tabs example"
                >
                <Tab  label="Description" />
                <Tab  label="Files" />
                <Tab label="Repos" />
                </Tabs>
              </Paper>

              <Typography variant="h6" className={classes.challengeDescription} >
                1. Title: Iris Plants Database<br/>
                Updated Sept 21 by C.Blake - Added discrepency information<br/>

                2. Sources:<br/>
                (a) Creator: R.A. Fisher<br/>
                (b) Donor: Michael Marshall (MARSHALL%PLU@io.arc.nasa.gov)<br/>
                (c) Date: July, 1988<br/>

                3. Past Usage:<br/>
                  - Publications: too many to mention!!!  Here are a few.<br/>
                1. Fisher,R.A. "The use of multiple measurements in taxonomic problems"
                Annual Eugenics, 7, Part II, 179-188 (1936); also in "Contributions
                to Mathematical Statistics" (John Wiley, NY, 1950).<br/>
                2. Duda,R.O., & Hart,P.E. (1973) Pattern Classification and Scene Analysis.
                    (Q327.D83) John Wiley & Sons.  ISBN 0-471-22361-1.  See page 218.<br/>
                3. Dasarathy, B.V. (1980) "Nosing Around the Neighborhood: A New System
                    Structure and Classification Rule for Recognition in Partially Exposed
                    Environments".  IEEE Transactions on Pattern Analysis and Machine
                    Intelligence, Vol. PAMI-2, No. 1, 67-71.<br/>
                    -- Results:<br/>
                      -- very low misclassification rates (0% for the setosa class)<br/>
                4. Gates, G.W. (1972) "The Reduced Nearest Neighbor Rule".  IEEE 
                    Transactions on Information Theory, May 1972, 431-433.<br/>
                    -- Results:<br/>
                      -- very low misclassification rates again<br/>
                5. See also: 1988 MLC Proceedings, 54-64.  Cheeseman et al's AUTOCLASS II
                    conceptual clustering system finds 3 classes in the data.<br/>

                4. Relevant Information:<br/>
                  --- This is perhaps the best known database to be found in the pattern
                      recognition literature.  Fisher's paper is a classic in the field
                      and is referenced frequently to this day.  (See Duda & Hart, for
                      example.)  The data set contains 3 classes of 50 instances each,
                      where each class refers to a type of iris plant.  One class is
                      linearly separable from the other 2; the latter are NOT linearly
                      separable from each other.<br/>
                  --- Predicted attribute: class of iris plant.<br/>
                  --- This is an exceedingly simple domain.<br/>
                  --- This data differs from the data presented in Fishers article
                  (identified by Steve Chadwick,  spchadwick@espeedaz.net )<br/>
                  The 35th sample should be: 4.9,3.1,1.5,0.2,"Iris-setosa"
                  where the error is in the fourth feature.<br/>
                  The 38th sample: 4.9,3.6,1.4,0.1,"Iris-setosa"
                  where the errors are in the second and third features.  <br/>

                5. Number of Instances: 150 (50 in each of three classes)<br/>

                6. Number of Attributes: 4 numeric, predictive attributes and the class<br/>

                7. Attribute Information:<br/>
                  1. sepal length in cm<br/>
                  2. sepal width in cm<br/>
                  3. petal length in cm<br/>
                  4. petal width in cm<br/>
                  5. class: <br/>
                      -- Iris Setosa<br/>
                      -- Iris Versicolour<br/>
                      -- Iris Virginica<br/>

                8. Missing Attribute Values: None<br/>

                Summary Statistics:<br/>
                          Min  Max   Mean    SD   Class Correlation<br/>
                  sepal length: 4.3  7.9   5.84  0.83    0.7826   <br/>
                    sepal width: 2.0  4.4   3.05  0.43   -0.4194<br/>
                  petal length: 1.0  6.9   3.76  1.76    0.9490  (high!)<br/>
                    petal width: 0.1  2.5   1.20  0.76    0.9565  (high!)<br/>

                9. Class Distribution: 33.3% for each of 3 classes.<br/>
              </Typography>
            </Card>
          </div>
          
          <div className={classes.challengeRight}>
            <Container>
              <div className={classes.buttons}>
                <div>
                  <Button variant="contained" color="primary" disableElevation>
                    <Typography>Submit Challenge</Typography>
                  </Button>
                </div>
                <div>
                  <FormControl className={classes.language__dropdown}>
                  <Select variant="outlined"
                      value={language}
                      onChange={handleChange}
                    >

                      <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <MenuItem value={language}>{language}</MenuItem>
                        <MenuItem value={language}>{language}</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className={classes.version__dropdown}>
                    <Select variant="outlined"
                      value={version}
                      onChange={handleChange}
                    >

                      <InputLabel id="demo-simple-select-label">Version</InputLabel>
                        <MenuItem value={version}>{version}</MenuItem>
                        <MenuItem value={version}>{version}</MenuItem>
                    </Select>
                  </FormControl>
                </div>  
                <div>
                  <Button variant="outlined" color="primary" disableElevation>
                    <Typography>VIEW REPOSITORIES</Typography>
                  </Button>
                </div>
                <div></div>
                <div>
                  <Button variant="contained" color="primary" disableElevation>
                    <Typography>RUN</Typography>
                  </Button>
                </div>
               

                

              </div>
                    
              <div className={classes.codeEditor}>
                <Container>
                  <Card className={classes.editor}>
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
                </Container>
              </div>
            
            </Container>
           
          </div>
              
        </div>
    )
}

export default IndividualChallenge;
