import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { NoteOutlined, Code, Notifications, Assignment, OpenInNew } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import DocumentHeading from '../components/DocumentHeading';
import DocumentSubheading from '../components/DocumentSubheading';
import Nav from '../components/Nav';
import ButtonRouter from '../components/Button';
import Image from 'material-ui-image';
import ML from '../images/machine-learning.jpg';
import ReactPlayer from 'react-player';
import { Slider } from '../components/Slider'

const useStyles = makeStyles({
    root: {
        margin: '40px',
        padding: '40px'
    },
    btnStarted: {
        position: 'relative',
        left: 0,
        top: '-30%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    bgImg: {
        backgroundImage: `url(${ML})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '30vh',
        width: '10vw'
    },
    mt40: {
        marginTop: '30px'
    },
})
export default function HomePage() {
    const classes = useStyles();
    // const elements = ['BlockChain', 'Data Science', 'Javascript', 'Python', 'Web Development'];

    return (
        <Grid container direction='column' spacing={3}>
            <Grid item>
                <Nav />
            </Grid>
            <div className="container">
                <Grid item xs={12}>
                    <Typography>
                        <DocumentSubheading text='Are you learning to code remotely?' />
                    </Typography>
                </Grid>
                <Grid item container direction='row' spacing={2}>
                    <Grid item container direction='column' xs={12} sm={6} spacing={2} justify='center'>
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
                    <Grid item xs={12} sm={6}>
                        {/* <Image src={ML} imageStyle={{height: '300px'}}/> */}
                        <img src={ML} style={{ height: '100%', width: '100%' }} />
                    </Grid>
                </Grid>
                <Grid item container direction='row' className={`${classes.btnStarted} ${classes.mt40}`}>
                    <Grid item xs={12} sm={3} >
                        <ButtonRouter buttonText='Get Started for Free' linkDest='internal' variant='contained' />
                    </Grid>
                </Grid>
                <Grid item container spacing={1} justify='center' style={{ margin: '40px 0', height: '300px' }}>
                    <Grid item xs>
                        <Typography variant='h3' align='center' fontWeight='lighter' >
                            We link you with developers in your career pathway
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti nulla a recusandae veritatis fugiat.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item container spacing={3} direction='row' className='section' justify='center'>
                    <Grid item container xs={12} md={4} direction='column' spacing={2}>
                        <Grid item>
                            {/* image */}
                            <img src={ML} className={classes.image} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>
                                Lorem ipsum dolor sit amet.
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, tenetur.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4} direction='column' spacing={2}>
                        <Grid item>
                            <img src={ML} className={classes.image} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>
                                Lorem ipsum dolor sit amet.
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus?
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4} direction='column' spacing={2}>
                        <Grid item>
                            <img src={ML} className={classes.image} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>
                                Lorem ipsum dolor sit amet.
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officia.
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Grid item container direction='row' spacing={2}>
                {/* {elements.map(element => (
                    <Grid item xs={12} md={3} container direction='column' className={classes.bgImg}>
                        <Grid item>
                            <Typography variant='h5'>
                                {element}
                            </Typography>
                        </Grid>
                    </Grid>
                ))} */}
                <Slider spacing={10} />
            </Grid>
            <div className="container">
                <Grid item container direction='row' spacing={4} style={{ margin: '40px 0' }}>
                    <Grid item container direction='column' spacing={2} xs={12} md={4}>
                        <Grid item xs>
                            <Typography variant='h3'>
                                Blogger, Instructor or Industry Expert?
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='h6'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quam voluptatum at quisquam!
                            </Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <ButtonRouter buttonText='Explore our blog' linkDest='internal' variant='contained' />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} align='center'>
                        <Paper elevation={2} style={{ height: '100%' }}>
                            <Grid container spacing={4} direction='column' justify='space-around' alignItems='center'>
                                <Grid item>
                                    <NoteOutlined />
                                    <Typography variant='h5'>
                                        Contribute Blogs
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maiores!
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <ButtonRouter buttonText='Post your tech blog' linkDest='internal' variant='outlined' />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} align='center'>
                        <Paper elevation={2} style={{ height: '100%' }}>
                            <Grid container spacing={4} direction='column' justify='space-around' alignItems='center'>
                                <Grid item>
                                    <Code />
                                    <Typography variant='h5'>
                                        Contribute Challenges
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit earum molestiae.
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <ButtonRouter buttonText='Post your code challenges' linkDest='internal' variant='outlined' />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container direction='row' alignItems='center' xs={12} md={10} style={{ height: '180px', position: 'relative', left: '34%', background: '#f6f6f6' }}>
                    <Grid item xs={1}>
                        <Notifications style={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item container direction='column' xs={4}>
                        <Grid item>
                            <Typography variant='h4'>
                                Promote on Chaptr
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4} alignItems='flex-end'>
                        <ButtonRouter buttonText='Submit resource' linkDest='internal' variant='contained' />
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2} direction='column' className='mt'>
                    <Grid item align='center'>
                        <Typography variant='h3' >
                            Lectures Could Be Boring. Not Group Projects!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' align='center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, saepe error.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction='row' spacing={3}>
                    <Grid item container direction='column' xs={12} md={5}>
                        <Paper style={{ height: '140px', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item container xs direction='row'>
                                <Grid item xs={1}>
                                    <Assignment style={{ fontSize: 30 }} />
                                </Grid>
                                <Grid item container direction='column' xs spacing={2} justify='space-evenly'>
                                    <Grid item xs>
                                        <Typography variant='h4'>
                                            Structured Curriculums
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='p'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quibusdam deserunt eveniet adipisci cum earum?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper style={{ height: '140px', marginBottom: '20px'}}>
                            <Grid item container xs direction='row'>
                                <Grid item xs={1}>
                                    <Code style={{fontSize: 30}}/>
                                </Grid>
                                <Grid item container direction='column' xs spacing={2} justify='space-evenly'>
                                    <Grid item xs>
                                        <Typography variant='h4'>
                                            Live Video Code Editor
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='p'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda expedita saepe accusantium eveniet suscipit culpa.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper style={{height: '140px', marginBottom: '20px'}}>
                            <Grid item container xs direction='row'>
                                <Grid item xs={1}>
                                    <OpenInNew style={{fontSize: 30}}/>
                                </Grid>
                                <Grid item container direction='column' xs spacing={2} justify='space-evenly'>
                                    <Grid item xs>
                                        <Typography variant='h4'>
                                            Unlimited Dev Resources
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='p'>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ea rem molestias voluptates sit! Excepturi.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7} justify='center'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=5qap5aO4i9A'/>
                    </Grid>
                </Grid>
                <Grid item container='column' spacing={3} justify='center'>
                    <Grid item>
                        <Typography variant='h3' align='center'>
                            Join Thousands of Developers Learning Code Collaboratively
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' align='center'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsam.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <ButtonRouter buttonText='Get Started For free' linkDest='internal' variant='contained'/>
                    </Grid>
                </Grid>
            </div>
            
        </Grid>
    )
}