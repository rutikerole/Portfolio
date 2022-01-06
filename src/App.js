import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import NavMenu from './components/NavMenu';
import Scroll from './components/Scroll';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Scroll>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/project">
              <Projects />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            {/* when we add home on top then (/) this slash matches and we see only home page therefore we added it on bottom  */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Scroll>
      </Router>
    </>
  );
}
