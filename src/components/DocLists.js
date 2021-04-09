import React from "react";

import SingleDoc from "./SingleDoc";

export default function DocLists({ doctorData }) {
  return (
    <div className="lists">
      <div className="title">
        <h2>Available Doctors</h2>
      </div>

      <SingleDoc list={doctorData} />
    </div>
  );
}
