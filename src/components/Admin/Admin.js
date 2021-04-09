import React from "react";
import { Link } from "react-router-dom";
export default function Admin() {
  return (
    <div className="admin">
      <div>
        <h5>Admin</h5>
      </div>
      <Link to="/admin/create" className="btn btn-secondary">
        Create
      </Link>
    </div>
  );
}
