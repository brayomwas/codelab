import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import DocumentHeading from '../components/DocumentHeading';
import DocumentSubheading from '../components/DocumentSubheading';
import Nav from '../components/Nav';
import ButtonRouter from '../components/Button';
import Image from 'material-ui-image';
import ML from '../images/machine-learning.jpg';

const useStyles = makeStyles({
    root: {
        margin: '40px',
        padding: '40px'
    },
    btnStarted: {
        position: 'relative',
        left: '6%'
    }
})
export default function HomePage() {
    const classes = useStyles();
    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
                <Nav />
            </Grid>
            <div className="container">

            
            <Grid item>
                <Typography>
                    <DocumentSubheading text='Are you learning to code remotely?' />
                </Typography>
            </Grid>
            <Grid item container direction='row' spacing={2}>
                <Grid item container direction='column' sm={6}>
                    {/* match with peers */}
                    <Grid item>
                        <Typography>
                            <DocumentHeading text='Match with Peers' />
                            <DocumentSubheading text='Practice Coding Together!' />
                        </Typography>
                    </Grid>
                    
                    <Grid item>
                        <Typography>
                            Learning coding skills online should not be boring and isolated.<br /> Link up with other learners and practice together.
                        </Typography>
                    </Grid>
                </Grid>
                {/* image */}
                <Grid item sm={6}>
                    {/* <img src={ML} alt='Image'/> */}
                    <Image src={ML} imageStyle={{height: '300px'}}/>
                    
                </Grid>
            </Grid>
            <Grid item container direction='row' className={classes.btnStarted}>
                <Grid item xs={2} sm={3} >
                    <ButtonRouter buttonText='Get Started for Free' linkDest='internal' />
                </Grid>
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs>
                    <Typography variant='h2'>
                        {<DocumentSubheading text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, nihil!' />}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti nulla a recusandae veritatis fugiat.
                    </Typography>
                </Grid>
            </Grid>
            </div>
        </Grid>
    )
}