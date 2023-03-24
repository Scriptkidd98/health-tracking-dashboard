import React from "react";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/Schedule' element={<Schedule/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;