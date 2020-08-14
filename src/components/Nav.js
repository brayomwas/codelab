import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LearningPathways from "../pages/LearningPathways";
import IndividualPathway from '../pages/IndivudualPathway'
export default function Nav() {
  return (
    <Router>
      <div className="navbar-fixed">
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href=""></a>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/learningpathways">Pathways</Link>
              </li>
              <li>
                <Link to="/individual">Individual Pathway</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/learningpathways">
          <LearningPathways />
        </Route>
        <Route path="/individual">
          <IndividualPathway />
         </Route>
      </Switch>
    </Router>
  );
}
