import React from 'react';
import { Grid, Typography,  } from '@material-ui/core';
import PathwayCard from '../components/PathwayCard';
import DocumentHeading from '../components/DocumentHeading'
import Udemy from '../images/Udemy Banner.png';
import Coursera from '../images/Coursera Banner.jpg';
import courses from '../data/courses.json'
export default function LearningPathways() {
    
    let cardDetails;
    for (const key in courses) {
        if (key === 'data') {
             cardDetails = courses.data.map((course) => {
                return {
                    platform: course[0],
                    link: course[4],
                    title: course[5],

                }
            });
        }
        
    }

    const rows = cardDetails.map((course) => {
        return (
            <Grid item xs={6} sm={4}>
            <PathwayCard className="course" heading={course.name} platform={course.platform} title={course.title} link={course.link} image={course.platform === 'Udemy' ? Udemy : Coursera} buttonText='Get Started' linkDest='external'key={course.title}/> 
            </Grid>
        )
    })
    
    return (
        <Grid container spacing={3} direction='column'>
            {/* Heading */}
            <Grid item xs>
                <Typography variant='h1'>
                    {<DocumentHeading text='Courses' />}
                </Typography>
            </Grid>

            {/* Description */}

            <Grid item xs>
                <Typography variant='p'>
                View curricular guides to your learning pathway, discover on-demand skills from the job market and get recommendations to the best courses on Udemy, Coursera, edX etc
                </Typography>
            </Grid>

            {/* Cards */}

            <Grid item container xs spacing={3} direction='row'>
                {rows}
            </Grid>
        </Grid>

    )
}