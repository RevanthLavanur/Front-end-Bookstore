import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Sai' && password === 'Sai@227') {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        // Redirect to landing page after hiding the alert
        window.location.href = '/landing';
      }, 2000); // Adjust the timeout duration as needed
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 2000); // Adjust the timeout duration as needed
    }
  };

  return (
    <div id="Book_Container">
      <h1 id="form_heading">Login Page</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label id="formlabel_1">Email:</label><br />
        <input type="text" className='forminputtype' value={email} onChange={handleEmailChange} /><br />

        <label id="formlabel_1">Password:</label><br />
        <input type="password" className='forminputtype' value={password} onChange={handlePasswordChange} /><br />

        <button type="submit" style={{ padding: '20px 20px', fontSize: '45px' }}>Login</button>
      </form>
      {showSuccessAlert && (
        <div className="alert" style={{ backgroundColor: 'green', color: 'white', padding: '10px', textAlign: 'center' }}>
          Login successful
        </div>
      )}
      {showErrorAlert && (
        <div className="alert" style={{ backgroundColor: 'red', color: 'white', padding: '10px', textAlign: 'center' }}>
          Incorrect email or password
        </div>
      )}
      
    </div>
  );
}

export default Login;
