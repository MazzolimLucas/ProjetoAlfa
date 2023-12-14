import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './Root/App';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';

import Home from './Components/Home/Index';
import Contato from './Components/Contato/Index';
import Sobre from './Components/Sobre/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
    {
    path: '/',
    element: <Home/>
    },
   {
    path: 'Contato',
    element: <Contato/>,
   },
  {
    path: 'Sobre',
    element: <Sobre/> 
   },
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router}/>
);


