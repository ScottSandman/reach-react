import React, { Children } from "react";
import { Link, Router, navigate } from "@reach/router";
import myDatabase from "./myDb";

// Home Page
// Content Page
// Contact Page
// About Page

const Home = () => <div>Home, Home on the Range!</div>;

const Contact = () => <div>You can reach us at FOASS!</div>;

const Rocks = ({ children }) => (
  <div>
    <p>Rock Climbing with the Psychic Detectives</p>
    {myDatabase.map((rock) => {
      return (
        <>
          <Link to={String(rock.id)} key={rock.id}>
            {rock.name}
          </Link>
          <br />
        </>
      );
    })}
    {/* {navigate(`/rocks/${rock.id})`} */}
    {children}
  </div>
);

const Rock = ({ id }) => {
  // console.log(id);
  let babyRock = myDatabase.filter((rock) => {
    // console.log(rock, rock.id == id);
    return rock.id == id;
  });
  console.log(babyRock);
  if (babyRock[0] === undefined) {
    return (
      <div>{"Bahahahahahahahahaha! That isn't a rock, you non-psychic"}</div>
    );
  }
  return (
    <div>
      <img src={babyRock[0].image} />
      <h4>{babyRock[0].name}</h4>
      <h5>{babyRock[0].location}</h5>
      <p>{babyRock[0].description}</p>
    </div>
  );
};

const RockIndex = () => (
  <div>
    <p>Rock Lobstah Index. B-52's reference</p>
  </div>
);

const About = () => (
  <div>
    We are the Psychic Detective Agency. We know who you are and what you want.
    So please feel free to leave the site. We'll be in touch shortly.
  </div>
);

const NotFound = () => (
  <p>
    Page Not Found, But we know what you intended so we'll go get that for you.
  </p>
);

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
