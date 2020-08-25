import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './Button'
export default function PathwayNav() {
    return (
        <Router>
            <nav className="white">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left red-text">
                        <li>
                            <Link to="/overview" className="black-text">Pathway Overview</Link>
                        </li>
                        <li>
                            <Link to="/on-demand-skills" className="black-text">On-demand Skills</Link>
                        </li>
                        <li>
                            <Link to="/course-recs" className="black-text">Course Recommendations</Link>
                        </li>
                        <li>
                            <Link to="/book-recs" className="black-text">Book Recommendations</Link>
                        </li>
                    </ul>
                    <div className="right">
                      {/* <Button text="View all courses here"/> */}
                      <Link to="" className="waves-effect waves-light blue lighten-1 white-text btn mr-20">View all courses here</Link>
                    </div>
                    
                </div>
            </nav>
            <Switch>
                <Route path="/curriculum">

                </Route>
                <Route path="/on-demand-skills">

                </Route>
                <Route path="/course-recs">

                </Route>
                <Route path="/book-recs">

                </Route>
            </Switch>
        </Router>
    )
}