import React, { useState } from 'react';
import Main from "./Main";

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic
    if (username.trim() === '' && password.trim() === '') {
        alert('Invalid credentials');
    } else {
        setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Perform logout logic here
    setLoggedIn(false);
    setUsername('');
    setPassword('');
}

  if (loggedIn) {
    return <Main username={username} onLogout={handleLogout} />;
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username" placeholder="Please input your username"
                    id="username" name="username">
                </input>       
             </div>
        <div className="form-group">
          <label>Password</label>
          <input
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Please input your password"
                    id="password" name="password">
                </input>       
             </div>
        <button className='submit-btn' type="submit">Login</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};