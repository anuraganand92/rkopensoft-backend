import React from 'react';

const Login = () => {
    return (
        <form>
            <h1>Login</h1>
            <div>
                <label>Email ID:</label>
                <input type="email" name="emailId" required />
            </div>
            <div>
                <label>User Type:</label>
                <select name="userType" required>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
};

export default Login;
