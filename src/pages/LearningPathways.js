import React from 'react';
import PathwayRow from '../components/PathwayRow'
import CourseCard from '../components/CourseCard'
import MissingPathwayCard from '../components/MissingPathway'
import DocumentHeading from '../components/DocumentHeading'
import data from '../data/Details.json'
export default function LearningPathways() {
    const courseDetails = data.map(course => {
        return (
            {title: course.title,
             instructors: course.instructors,
             price: course.price,
             enrolled: course.enrolled,
             instructors: course.instructors,
             reviews: course.reviews,
             rating: course.rating,
             platform: course.platform}
        )
    });
    const rows = courseDetails.map(course => {
        return (
            <CourseCard className="course" heading={course.title} description={course.reviews.description} enrolled={course.enrolled} rating={course.rating} instructors={course.instructors} />
        )
    })
    
    return (
        <div className="row">
            <div className="col s12">
                <main>
                    <div className="row">
                        <div className="col l3">
                            <aside className="sidebar">
                                <nav className="transparent">
                                 <ul>
                                    <li>Home</li>
                                    
                                 </ul>
                                </nav>
                            </aside>
                        </div>
                        <div className="col l9">
                            <DocumentHeading text="Career Pathway Guides"/>
                            <p>View curricular guides to your learning pathway, discover on-demand skills from the job market and get recommendations to the best courses on Udemy, Coursera, edX etc</p>
                            <section className="course-cards">
                            
                                 {rows}
                                <MissingPathwayCard />
                                <MissingPathwayCard />
                                <MissingPathwayCard />
                            </section>
                        </div>
                    </div>
                    
                   
                </main>
            </div>
        </div>
        
    )
}