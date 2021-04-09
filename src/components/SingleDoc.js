import React from "react";
import { Link } from "react-router-dom";
export default function SingleDoc({ list }) {
  return (
    <div className="single-doc">
      <ul>
        {list.map((data) => (
          <li>
            <i class="fa fa-user-md" aria-hidden="true"></i>
            <div>
              {" "}
              {data.title}
              {data.name}
            </div>
            <div> {data.specialty}</div>
            <Link to={`new-appointment/${data.id}`} className="btn btn-primary">
              Book appointment
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
