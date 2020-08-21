// Vendor libs
import React, { useState, useContext } from 'react';
import Link from 'next/link';

// Context
import { AuthContext } from '../context/auth';

// Component definition
const Header = () => {
  // Get context members
  const { currentUser, logIn, logOut } = useContext(AuthContext);

  // Component state members
  const [username, setUserName] = useState(
    currentUser ? currentUser.username : ''
  );
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  // Event handlers
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    try {
      logIn(username, password);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <>
      <h3>Header</h3>
      <p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <span>&nbsp; | &nbsp;</span>
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
        <span>&nbsp; | &nbsp;</span>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>

      {/* El usuario no está registrado */}
      {!currentUser && (
        <form onSubmit={loginSubmitHandler}>
          <input type='text' onChange={(e) => setUserName(e.target.value)} />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Entrar</button>

          <p style={{ color: 'red' }}>{message}</p>
        </form>
      )}

      {/* El usuario está registrado */}
      {currentUser && (
        <>
          <span>{currentUser.username}</span>
          <a href='#' onClick={(e) => logoutHandler(e)}>
            logOut
          </a>
        </>
      )}
    </>
  );
};

// Exportation
export default Header;
