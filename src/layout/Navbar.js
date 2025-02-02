import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Nikhil Bharat Bangali (Udbastu) Samanway Samiti
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


        </div>

      </nav>
      <Link className="btn btn-outline-primary" to="/addtask">
            Add Task
          </Link>
    </div>
  );
}
