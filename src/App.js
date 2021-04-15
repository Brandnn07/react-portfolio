import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Footer">
          <Footer />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
