import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Login from './components/Login';
import StudentHome from './components/StudentHome';
import Profile from './components/Profile';
import AdminHome from './components/AdminHome';
import AllotRooms from './components/AllotRooms';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/studentHome">Student Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/adminHome">Admin Home</Link>
                        </li>
                        <li>
                            <Link to="/allotRooms">Allot Rooms</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/studentHome">
                        <StudentHome />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/adminHome">
                        <AdminHome />
                    </Route>
                    <Route path="/allotRooms">
                        <AllotRooms />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
