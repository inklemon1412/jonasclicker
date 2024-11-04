import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import Main from "./Pages/Main";

function App() {
  const [points, setPoints] = useState(0);
  const [pointsPerClick, setPointsPerClick] = useState(1);
  return (
    <>
    <Router>
      <Routes>
        <Route 
        path="/"
        element={
          <Main
          points={points}
          setPoints={setPoints}
          pointsPerClick={pointsPerClick}
          setPointsPerClick={setPointsPerClick}
          />
        }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
