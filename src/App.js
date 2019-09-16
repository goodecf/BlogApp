import React from "react";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Submit from "./pages/Submit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Post from "./posts/Post";
import PostState from "./context/posts/PostState";

function App() {
  return (
    <PostState>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/comments/:id" component={Post}></Route>
            <Route exact path="/submit" component={Submit}></Route>
          </Switch>
        </div>
      </Router>
    </PostState>
  );
}

export default App;
