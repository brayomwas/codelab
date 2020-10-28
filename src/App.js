import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Courses from "./pages/Courses";
import LearningPathways from "./pages/LearningPathways";
import "materialize-css/dist/css/materialize.min.css";
import Layout from "./components/Layout";
import theme from "./theme";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import IndividualPathway from "./pages/IndividualPathway";
import IndividualBlog from "./pages/IndividualBlog";
import IndividualChallenge from "./pages/IndividualChallenge";
import CodeChallenges from './pages/CodeChallenges';
import Github from './pages/Github'
// import pathways from './data/pathways.json'



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/individual" component={IndividualBlog} />
            
            <Route path="/individualBlog">
              <Layout>
                <IndividualBlog />
              </Layout>
            </Route>
            
            <Route path="/blog">
              <Layout>
                <Blog />
              </Layout>
            </Route>

            <Route path="/courses">
              <Layout>
                <Courses />
              </Layout>
            </Route>

            <Route path="/individualChallenge">
              <Layout>
                <IndividualChallenge />
              </Layout>
            </Route>

            <Route
              exact
              path={`/pathways/:individualPathway`}
              render={(props) => (
                <Layout>
                  <IndividualPathway {...props} />
                </Layout>
              )}
            />

            <Route
              path="/pathways"
              render={(props) => (
                <Layout>
                  <LearningPathways {...props} />
                </Layout>
              )}
            />
            <Route 
              path='/codeChallenges'
              render={() => (
                <Layout>
                  <CodeChallenges />
                </Layout>
              )}
            />
            <Route 
              path='/github'
              render={() => (
                <Layout>
                  <Github />
                </Layout>
              )}
              />
          </Switch>
        </>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
  