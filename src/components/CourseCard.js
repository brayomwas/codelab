import React from 'react';
import Logo from '../images/javascript.svg'
import CardHeading from './CardHeading'
export default function CourseCard(props) {
    return (
        <div className="row">
            <div className="col l11">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={Logo} alt="Logo" />
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content center">
                        <CardHeading text={props.heading} />
                            <p>{props.description}</p>
                            <p>Enrolled: {props.enrolled}</p>
                            <p>Rating: {props.rating}</p>
                            <p>Instructors: {props.instructors}</p>
                    </div>
                    <div className="card-action center">
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
