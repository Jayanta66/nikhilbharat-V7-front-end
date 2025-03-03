import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg">
    
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
          tiptops.xyz
         
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
      <div>

        <h1>Hi everyone W E L C O M E   to my website. </h1>
        <h1>I am Jayanta Halder . If liked my website and if you want to build any website then i am here to turn your ideas into real . you may contact : 8910425824</h1>

        <h1>To add anything please follow these setting on you chrome browser > goto three dot > Settings > Privacy  and security > security > advanced > use secure DNS > turn on > select dns provider > cloudflare(1.1.1.1)</h1>


      </div>

      <Link className="btn btn-outline-primary" to="/addtask">
            Add Task
          </Link>
    </div>
  );
}
