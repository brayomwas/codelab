import React from "react";
import { Link } from "react-router-dom";
import Courses from "../pages/Courses";
import IndividualPathway from '../pages/IndivudualPathway';
import LearningPathways from "../pages/LearningPathways";
// import history from '../history'
export default function Nav(props) {
  return (
    <>
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
                <Link to="/pathways" className='black-text'>
                  Pathways
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  );
}
