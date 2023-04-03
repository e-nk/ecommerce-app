import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout({ onLogout }) {
  const history = useHistory();

  const handleLogout = () => {
    // Call the onLogout function
    onLogout();
    // Redirect the user to the NavbarFront component
    history.push('/home'); // or any other URL that leads to NavbarFront component
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
