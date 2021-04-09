import React from "react";

export default function Login() {
  return (
    <div className="login">
      <form>
        <div>
          <h4>Please Login</h4>
          <label>
            <p>Username</p>
            <input type="text" placeholder="Username" />
          </label>
        </div>
        <div>
          <label>
            <p>password</p>
            <input type="password" placeholder="Password" />{" "}
          </label>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
