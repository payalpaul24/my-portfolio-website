import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/Home/About/About';
import AllProject from './components/Home/AllProject/AllProject';
import BlogDetails from './components/Home/BlogDetails/BlogDetails';
import ContactDetails from './components/Home/ContactDetails/ContactDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allProject">
            <AllProject></AllProject>
          </Route>
          <Route path="/blogDetails">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="/contact">
            <ContactDetails></ContactDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
