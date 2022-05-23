import React, { Component } from "react";

// import { Container } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import LandingHome from "./Landing/LandingHome";
import Home from "./Components/Home";
import SignInForm from "./Components/Login/SignInForm";
import LoginForm from "./Components/Cadit login/LoginForm";
import RegisterForm from "./Components/Register/RegisterForm";
import Card from "./Components/Card/Card";
import Profile from "./Components/Profile/profile";
import Password from "../src/Components/UpdatePassword/Password"
import Admin from "../src/Components/Admin profile/Admin"
import Update from "../src/Components/Update/Update"
import Event from "./Components/EventDetails/Event";
import Slidebar from "./Components/Slidebar/Slidebar"
import Logout from "./Components/Logout";
import Profile1 from "./Components/Profile/Profile1";
import Profile2 from "./Components/Profile/Profile2";
import Profile3 from "./Components/Profile/Profile3";

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path="/SignInForm" element={<SignInForm />} />
          <Route exact path="/cadit" element={<LoginForm />} />
          <Route exact path="/Registerform" element={<RegisterForm />} />
          <Route exact path="/Card" element={<Card />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Password" element={<Password />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Update" element={<Update />} />
          <Route exact path="/Event" element={<Event />} />
          <Route exact path="/Slidebar" element={<Slidebar />} />
         
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/Profile1" element={<Profile1 />} />
          <Route exact path="/Profile2" element={<Profile2 />} />
          <Route exact path="/Profile3" element={<Profile3 />} />
        </Routes>
      </Router>
    </div>
  );
  }

export default App;

