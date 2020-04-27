import React, { Children } from "react";
import { Link, Router, navigate } from "@reach/router";
import myDatabase from "./myDb";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Rocks from "./components/Rocks";
import Rock from "./components/Rock";
import RockIndex from "./components/RockIndex";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <h3>Masters of Destiny</h3>
      <nav>
        <Link to="/">Home</Link> <Link to="rocks">Rock Climbing</Link>{" "}
        <Link to="contact">Contact Us</Link> <Link to="about">About Us</Link>
      </nav>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Rocks path="/rocks">
          <RockIndex path="/" />
          <Rock path=":id" />
        </Rocks>
        <Contact path="/contact" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
