import Header from '../Assents/Header';
import Footer from '../Assents/Footer';
import {Outlet} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';


export default function App(){


  return(
    <div className='App'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
