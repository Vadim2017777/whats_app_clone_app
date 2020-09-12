import React from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__body">
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId" component={Chat} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
