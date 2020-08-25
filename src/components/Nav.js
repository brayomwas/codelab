import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Courses from "../pages/Courses";
import IndividualPathway from '../pages/IndivudualPathway';
import LearningPathways from "../pages/LearningPathways";

export default function Nav() {
  return (
    <Router>
      <div className="navbar-fixed app-bar">
        <nav className="white">
          <div className="nav-wrapper">
            <a href=""></a>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/" className="black-text">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="black-text">Courses</Link>
              </li>
              <li>
                <Link to="/individual" className="black-text">Individual Pathway</Link>
              </li>
              <li>
                <Link to="/pathwayCard" className='black-text'>
                  Pathways
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/individual">
          <IndividualPathway />
         </Route>
         <Route path='/pathwayCard'>
           <LearningPathways />
         </Route>
      </Switch>
    </Router>
  );
}
