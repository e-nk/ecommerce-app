import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../index.css'

const Signup = () => {
const [isLogin, setIsLogin] = useState(true);
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const history = useHistory();

const handleToggle = () => {
setIsLogin(!isLogin);
setErrorMessage('');
};

const handleUsernameChange = (event) => {
setUsername(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleLogin = async () => {
const response = await fetch('https://ecommerce-backend-auwm.onrender.com/users/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
email,
password
})
});
if (response.ok) {
// Login successful, redirect to dashboard or homepage
history.push('/books'); // Replace with the actual dashboard route
} else {
// Login failed, display error message
setErrorMessage('Invalid email or password');
}
};

const handleSignup = async () => {
const response = await fetch('https://ecommerce-backend-auwm.onrender.com/users/register', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
username,
email,
password
})
});
if (response.ok) {
// Signup successful, redirect to dashboard or homepage
history.push('/books'); // Replace with the actual dashboard route
} else {
// Signup failed, display error message
const data = await response.json();
setErrorMessage(data.message);
}
};

const handleSubmit = (event) => {
event.preventDefault();
if (isLogin) {
handleLogin();
} else {
handleSignup();
}
};

return (
<div className="login-signup-container">
<h2 className="form-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
<form className="form-container" onSubmit={handleSubmit}>
{!isLogin && (
<div className="form-group">
<label htmlFor="username" className="form-label">Username:</label>
<input
           type="text"
           id="username"
           className="form-control"
           value={username}
           onChange={handleUsernameChange}
         />
</div>
)}
<div className="form-group">
<label htmlFor="email" className="form-label">Email:</label>
<input
         type="email"
         id="email"
         className="form-control"
         value={email}
         onChange={handleEmailChange}
       />
</div>
<div className="form-group">
<label htmlFor="password" className="form-label">Password:</label>
<input
         type="password"
         id="password"
         className="form-control"
         value={password}
         onChange={handlePasswordChange}
       />
</div>
{errorMessage && <div className="error-message">{errorMessage}</div>}
<button type="submit" className="form-btn">
{isLogin ? 'Login' : 'Sign Up'}
</button>
</form>
<button onClick={handleToggle} className="toggle-btn">
{isLogin ? 'Need to Sign Up?' : 'Already have an account?'}
</button>

</div>
);
};
export default Signup;