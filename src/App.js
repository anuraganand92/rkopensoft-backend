import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import EditRoom from "./components/edit-room.component";
import EditUser from "./components/edit-user.component";
import RoomList from "./components/room-list.component";
import UserList from "./components/user-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Routes>
            <Route path="/" exact component={RoomList} />
            <Route path="/edit/:id" component={EditRoom} />
            <Route path="/user" component={UserList} />
            <Route path="/edituser/:id" component={EditUser} />
            <Route path="/createuser" component={CreateUser} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;