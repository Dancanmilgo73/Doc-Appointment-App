import React from "react";
import DocData from "./MockData";
import SingleDoc from "./SingleDoc";

export default function DocLists() {
  return (
    <div className="lists">
      <div className="title">
        <h2>Available Doctors</h2>
      </div>

      <SingleDoc list={DocData} />
    </div>
  );
}
