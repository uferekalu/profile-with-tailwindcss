import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route component={Home} path='/' exact />
        </Switch>
      </>
  );
}

export default App;
