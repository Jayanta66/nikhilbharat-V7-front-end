import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
/*import React, { Component }  from 'react'; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./tasks/AddTask";
import EditTask from "./tasks/EditTask";
import ViewTask from "./tasks/ViewTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addtask" element={<AddTask />} />
          <Route exact path="/edittask/:id" element={<EditTask />} />
          <Route exact path="/viewtask/:id" element={<ViewTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
