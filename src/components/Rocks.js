import React from "react";
import { Link, navigate } from "@reach/router";
import myDatabase from "../myDb";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let id = e.target.elements[0].value;
        e.target.reset();
        navigate(`/rocks/${id}`);
      }}
    >
      <label for="rockSearch">
        Search for your favorite rock by id. Hint: there's only 4
      </label>
      <br />
      <input type="text" id="rockSearch" />
      <br />
      <button type="submit">Submit</button>
    </form>
    {children}
  </div>
);

export default Rocks;
