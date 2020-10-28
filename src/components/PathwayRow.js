import React from 'react';
import CourseCard from './CourseCard'
export default function PathwayRow(props) {
    return (
        <div className="row">
            <div className="col s12">
                <CourseCard heading="M" description="Intro to machine learning"/>
                <CourseCard heading="Web Development" description="Intro to web development"/>
                <CourseCard heading="System Programming" description="Intro to system programming"/>
            </div>
        </div>
    )
}