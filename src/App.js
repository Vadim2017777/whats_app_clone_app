import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="App__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId" component={Chat} />
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
