import React from "react";
import { Link } from "@reach/router";
import myDatabase from "../myDb";

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

export default Rock;
