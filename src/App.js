import React from 'react';
import {Home} from './Home'
import {About} from './About'
import {Service} from './Service'
import {Contact} from './Contact'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WebsiteWork } from "./WebsiteWork";

function App() {
  return (
    <>
    <Navbar />
  <Switch>
    <Route exact path ='/' component ={Home} />
    <Route path ='/about' component ={About} />
    <Route path ='/service' component ={Service} />
    <Route path ='/portfolio' component ={WebsiteWork} />
    <Route path ='/contact' component ={Contact} />
    <Route path ='/WebsiteWork' component ={WebsiteWork} />
    <Redirect to ='/' />
  </Switch>
  <Footer />
    </>
  );
}

export default App;
