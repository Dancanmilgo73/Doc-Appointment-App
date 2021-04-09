import React from "react";
import About from "./About.js";
import DocLists from "./DocLists";

export default function Home({ doctorData }) {
  return (
    <div className="Home">
      <About />
      <DocLists doctorData={doctorData} />
    </div>
  );
}
