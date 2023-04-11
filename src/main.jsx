import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Homepage from './Components/Homepage/Homepage';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>,
        loader: ()=>fetch('jobs.json')
      },
      {
        path:"/job/:jobId",
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`jobs.json/${params.jobId}`)



      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
