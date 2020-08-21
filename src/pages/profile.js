// Vendor libs
import React, { useContext, useEffect } from 'react';
import Router from 'next/router';

// Context
import { AuthContext } from '../context/auth';

// Page definition
const ProfilePage = () => {
  // Get context members
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      Router.push('/');
    }
  }, [currentUser]);

  return (
    <>
      <h1>Profile page</h1>
      {currentUser && (
        <>
          <p>Username : {currentUser.username}</p>
          <p>Email : {currentUser.email}</p>
        </>
      )}
    </>
  );
};

// Exportation
export default ProfilePage;
