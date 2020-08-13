import React from 'react';
import Logo from '../images/javascript.svg'
import CardHeading from './CardHeading'
export default function CourseCard(props) {
    return (
        <div className="row">
            <div className="col s12 m3 l3">
                <div className="card">
                    <div className="card-image">
                        <img src={Logo} alt="Logo" />
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content center">
                        <CardHeading text="Title" />
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="card-action center">
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
