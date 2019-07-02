import React from 'react';
import SignUp from './components/sign-up/sign-up';
import Navbar from '../src/navbar'
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Dashboard from './components/dashboard/Dashboard';
import AddPost from './components/Addpost/addPost';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/addnew" component={AddPost} /> 
    </Router>
  )
}

export default App;
