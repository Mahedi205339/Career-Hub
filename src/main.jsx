import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/root';
import Home from './components/Home/Home';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import ErrorPage from './components/Errorpege/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader:() =>fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
