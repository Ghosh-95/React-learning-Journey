import { createBrowserRouter, Outlet } from 'react-router-dom';

import Profile from './components/Profle';
import './App.css'
import Toolbar from './components/Toolbar';
import Gallery from './components/Gallery';
import { Form, FeedbackForm } from './components/Challenges/States/Form';
import ScholarsGallery from './components/Challenges/Props/Scholars';
import Accordion from './components/Accordion';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Accordion /> },
      { path: '/gallery', element: <div style={{ marginTop: '2rem' }}> <Gallery /></div> },
      { path: '/profile', element: <div style={{ marginTop: '2rem' }}><Profile /></div> },
    ],
  },
]);
