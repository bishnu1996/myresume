import Homepage from "../Homepage";
import Register from "../Register";
import Login from "../Login";
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage />}> 
        </Route>
        
        <Route path="/login" element={ <Login />}>  
        </Route>

        <Route path="/register" element={ <Register />}>
        </Route>

        <Route path="*" element={<h1>There is nothing here: 404</h1>}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
