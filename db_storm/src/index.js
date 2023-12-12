import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './Root/App';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';

import Home from './Components/Home/Index';
import Login from './Components/Login-Cadastro/Index';
import Contato from './Components/Contato/Index';
import LoginCadastro from './Components/Login-Cadastro/Index';
import Sobre from './Components/Sobre/Index';
import Carrinho from './Components/Carrinho/Index';

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
    path: 'Login',
    element: <Login/>
   },
   {
    path: 'Contato',
    element: <Contato/>
   },
   {
    path: 'Login e Cadastro',
    element: <LoginCadastro/>
   },
   {
    path: 'Sobre',
    element: <Sobre/> 
   },
   {
    path: 'Carrinho',
    element: <Carrinho/>
   }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


