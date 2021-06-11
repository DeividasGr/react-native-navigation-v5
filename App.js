import React from 'react';
import Navigation from './src/navigation';
import {Provider as AuthProvider} from './src/context/AuthContext';

export default function Providers() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
