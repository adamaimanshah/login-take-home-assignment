import React, { useState } from 'react';

export const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate registration logic
    if (username && password && email) {
      setRegistered(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  if (registered) {
    return(
        <div className="container">
        <h1>Registration Successful!</h1>
        <button className="logout-btn" onClick={() => props.onFormSwitch('login')}>Login</button>
        </div>
    )
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="submit-btn"type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};


