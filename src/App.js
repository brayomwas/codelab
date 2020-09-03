import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import LearningPathways from './pages/LearningPathways';
import 'materialize-css/dist/css/materialize.min.css'
import Layout from './components/Layout'
import './App.css';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import IndividualPathway from './pages/IndivudualPathway';
// import pathways from './data/pathways.json'

function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <HomePage />
          </Layout>
        </Route>

        <Route path="/courses">
          <Layout>
             <Courses />
         </Layout>
        </Route>

        <Route path="/blog">
          <Layout>
             <Blog />
         </Layout>
        </Route>

         <Route 
            path='/pathways' 
            render={(props) => <Layout><LearningPathways {...props}/></Layout>} 
          />

      </Switch>
      </>
    
    </Router>
  );
}

export default App;
