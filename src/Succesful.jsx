import React from 'react';

const RegistrationSuccessPage = (props) => {
    return (
      <div className='main-container'>
        <h1>Registration Successful</h1>
        <p>Congratulations! Your registration was successful.</p>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Back</button>
      </div>
    );
  };
  
  export default RegistrationSuccessPage;