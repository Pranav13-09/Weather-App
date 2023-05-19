import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Weather from "./components/Weather.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/myCity" />}></Route>
          <Route path="/myCity" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
