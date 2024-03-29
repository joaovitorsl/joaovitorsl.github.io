import React from 'react';
import './App.css';
import './main.css';
import About from  './js/about';
import Projects from './js/projects';
import Contact from './js/contact';
import { HashRouter } from 'react-router-dom';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Title(){
  return(
    <div class="item" id="header">Hi my name is João Vitor. <br /> Welcome to my portfolio :)</div>
  );
}

function Footer(){
  return(
    <div class="item" id="footer">©2020 JOAO LUCIANO</div>
  );
}

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div id="teste">
        {}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <div id="main-content">
        <section class="container row-wrap">
          <div id="back_header"> </div>
          <Title />

          <div class="item">
            <Link id="aStart" to={`/main`}>
              <span class="blink" id="start" onKeyPress="">PRESS START</span>
            </Link>
          </div>

          <Footer />
        </section>

      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <div id="main-content">
        <section class="container row-wrap">
          <Title />

          <div class="saves">
            <Link id="aSave" to={`/projects`}>
              <span>JOAO A . . . . PROJECTS</span>
            </Link>
            <Link id="aSave" to={`/about/0`}>
              <span>JOAO B . . . . ABOUT ME</span>
            </Link>
            <Link id="aSave" to={`/contact`}>
              <span>JOAO C . . . CONTACT ME</span>
            </Link>
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
}