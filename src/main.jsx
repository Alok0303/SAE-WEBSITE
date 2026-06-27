// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import SponsorsPage from './pages/SponsorsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import './index.css';

// Define the application's routes
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This makes HomePage the default child route
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'team',
        element: <TeamPage />,
      },
      {
        path: 'sponsors',
        element: <SponsorsPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);