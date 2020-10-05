import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Nav_page from "./components/Nav_page/Nav_page";
import FetchLAndingPage from "./components/FetchLAndingPage/FetchLAndingPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Collection from "./components/Collection/Collection";
import Admin from "./components/Admin/Admin";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Nav_page></Nav_page>  <FetchLAndingPage></FetchLAndingPage>
            </Route>

            <Route exact path="/">
              <Nav_page></Nav_page> <FetchLAndingPage></FetchLAndingPage>
            </Route>

            <Route path="/login">
             <Login></Login>
            </Route>

            <PrivateRoute path="/register">
                      <Register></Register>
            </PrivateRoute>

            <PrivateRoute path="/collection">
              <Nav_page></Nav_page> <Collection></Collection>

            </PrivateRoute>

            <Route path="/admin">
              <Admin></Admin>
            </Route>
    
          <Route path="*">
            <NotFound></NotFound>
          </Route>

          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
