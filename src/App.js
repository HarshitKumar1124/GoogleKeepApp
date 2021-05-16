import React from 'react';
import './App.css';
import Navbar from "./Component/Navbar.jsx";
import { Switch, Route,Redirect } from 'react-router-dom';
import LightMode from './LightMode';
import Footer from './Component/Footer.jsx';


const App = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0 Viewport">
        <Navbar />

        <div className="row p-0 m-0 mb-5">
          <Switch>
            <Route exact path="/" component={LightMode}/>
            <Redirect path="/"/>
          </Switch>
        </div>
        <div className="row m-0 p-0">
          <Footer />
        </div>


      </div>
    </>
  )
}

export default App;

