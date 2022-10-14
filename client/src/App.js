//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  const NewLandingPage = Auth(LandingPage, null, true);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      <div>
        <nav></nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Routes>
          <Route exact path="/" element={<NewLandingPage />} />
          <Route exact path="/login" element={<NewLoginPage />} />
          <Route exact path="/register" element={<NewRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
