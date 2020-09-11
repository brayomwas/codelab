import React from 'react';
import { Button, Typography } from '@material-ui/core'
import Udemy from '../images/Udemy Banner.png'
import Coursera from '../images/Coursera Banner.jpg'
import CardHeading from './CardHeading'

export default function CourseCard(props) {
    return (
        <div className="row">
            <div className="col l11">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={props.platform === 'Udemy' ? Udemy : Coursera} alt="Logo" />
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content center">
                        <CardHeading text={props.heading} />
                            <p>{props.title}</p>
                            <p>{props.platform}</p>
                            
                    </div>
                    <div className="card-action center">
                        <Button variant='outlined' color='primary' href={props.link}>
                            <Typography color='primary'>Get Started</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
