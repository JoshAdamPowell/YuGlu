import React from 'react';
import SignUp from './components/SignUp/sign-up';
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import AddPost from './components/AddPost/AddPost'
import NavBar from './components/Navbar/NavBar' 

function App() {
  console.log(process.env.PORT)
  return (
    <Router>
      <NavBar></NavBar>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/addnew" component={AddPost} /> 
    </Router>
  )
}

export default App;
