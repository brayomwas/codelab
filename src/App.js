import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Courses from './pages/Courses';
import LearningPathways from './pages/LearningPathways';
import 'materialize-css/dist/css/materialize.min.css'
import Layout from './components/Layout'
import theme from './theme'
import './App.css';
import Home from './pages/Home';
import IndividualPathway from './pages/IndividualPathway';
import IndividualBlog from './pages/IndividualBlog';
import Blog from './pages/Blog';
// import pathways from './data/pathways.json'



function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <>
      <Switch>
        
        <Route path='/blog'>
          <Layout>
            <Blog />
            </Layout>
        </Route>

        <Route path="/courses">
          <Layout>
             <Courses />
         </Layout>
        </Route>

        <Route path="/individualBlog">
          <Layout>
             <IndividualBlog />
         </Layout>
        </Route>

        <Route 
            exact
            path={`/pathways/:individualPathway`}
            render={(props) => <Layout><IndividualPathway {...props}/></Layout>}
        />

         <Route 
            path='/pathways' 
            render={(props) => <Layout><LearningPathways {...props}/></Layout>} 
          />
          

      </Switch>
      </>
    
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
  