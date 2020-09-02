import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import LearningPathways from './pages/LearningPathways';
import 'materialize-css/dist/css/materialize.min.css'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <Router>
      <>
      <div>
        <Nav />
  
      </div>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        {/* <Route exact path="/pathways/:pathway" render={(props) =>    <IndividualPathway {...props} pathway='Machine' />} /> */}

         <Route 
            path='/pathways' 
            render={(props) => <LearningPathways {...props}/>} 
          />
          
      </Switch>
      </>
    
    </Router>
  );
}

export default App;
