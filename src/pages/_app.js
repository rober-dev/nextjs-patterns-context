import React from 'react';

// Context providers
import { AuthProvider } from '../context/auth';

// Custom components
import Header from '../components/header';

// eslint-disable-next-line react/prop-types
const BaseApp = ({ Component, pageProps }) => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
};

// Exportation
export default BaseApp;
