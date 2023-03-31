import React, { Children } from 'react'
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./HomeSection/components/Navbar/Navbar";
import Home from "./HomeSection/pages/Home/Home";
import PrivateRoute from './HomeSection/pages/Login/components/PrivateRoute';
import Login from "./HomeSection/pages/Login/Login";
import Register from "./HomeSection/pages/Register/Register";
import ArtriNavbar from './MainSection/components/Navbar/ArtriNavbar';
import GamePage from './MainSection/pages/Game/GamePage';
import HomePage from './MainSection/pages/Home/HomePage';
import PracticeLevelPage from './MainSection/pages/PracticeLevel/PracticeLevelPage';



const router = createBrowserRouter([
{
  path:"/",
  element: <Navbar />,
  children:[
    {
      errorElement:<p>Not Found</p>,
      children:[
        {
          index: true, element:<Home />
        },
        {
          path:"/information",
          element:<p>do information</p>
        },
        {
          path:"/contacts",
          element: <p>do Contacts</p>
        },
        {
          path:"/login",
          element: <Login /> 
        },
        {
          path:"/register",
          element: <Register />
        },
        
      ]
    },
    
    
  ]
  
  
  
},{
path:"/artri",
  element: <ArtriNavbar /> ,
  children:[
    {
      errorElement:<p>Not Found</p>,
      children:[  {index: true,
      element: <PrivateRoute component = {<HomePage/>} />
      },

      {
        path:"/artri/practice_level",
        element: <PracticeLevelPage />,
      
      },
    {
        path:"/artri/game",
        element:<GamePage />
    }]

    }]
  }
]

)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
