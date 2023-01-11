import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const H1 = `${name} is a Web Developer from ${city}`
  return (
        <div id="home">
           <h1 style = {{ color: 'firebrick' }}> {H1}</h1>
        </div>
    );
}

export default Home;
