import React from "react";

export default function SingleDoc({ list }) {
  return (
    <div className="single-doc">
      <ul>
        {list.map((data) => (
          <li>
            <i class="fas fa-portrait"></i>
            <div> {data.name}</div>
            <div> {data.specialty}</div>
            <button>Book an appointment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
