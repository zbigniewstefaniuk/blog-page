import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//* Routes
import ROUTES from './app/utils/routes';

//* Compoonents
import Home from './app/pages/Home';
import About from './app/pages/About';
import Posts from './app/pages/Posts';
import Layout from './app/components/layout/Layout';
import Contact from './app/pages/Contact';
import Favoritues from './app/pages/Favoritues';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.contact}>
            <Contact />
          </Route>
          <Route path={ROUTES.post}>
            <Posts />
          </Route>
          <Route path={ROUTES.favoritues}>
            <Favoritues />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
