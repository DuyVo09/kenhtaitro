import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import appRouter from './routes';

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;