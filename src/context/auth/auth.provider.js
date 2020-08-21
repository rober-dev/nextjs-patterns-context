// Vendor libs
import React, { useState, useEffect } from 'react';
import { AuthContext } from './auth.context';

// AuthProvider definition
const AuthProvider = ({ children }) => {
  // Members. Intended to be resolved by API or GRAPHQL calls
  const users = [
    { email: 'user1@gmail.com', username: 'user1', pwd: '123' },
    { email: 'user2@gmail.com', username: 'user2', pwd: '123' },
    { email: 'user3@gmail.com', username: 'user3', pwd: '123' },
  ];

  //Component state menbers
  const [currentUser, setCurrentUser] = useState();

  const searchUserByUsernameAndPass = (u, p) => {
    return users.find((usr) => usr.username === u && usr.pwd === p);
  };

  const logIn = (u, p) => {
    const user = searchUserByUsernameAndPass(u, p);
    if (user) {
      setCurrentUser(user);
    } else {
      throw new Error('Datos de usuario incorrectos');
    }
  };

  const logOut = () => {
    if (currentUser) {
      setCurrentUser(null);
    } else {
      alert('El usuario no está logueado');
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportation
export { AuthProvider };
