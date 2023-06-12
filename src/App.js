import React from 'react';
import './App.scss'
import {BrowserRouter as Router , Route}from 'react-router-dom';
import Header from './Components/Head/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Home from './Pages/Home'



function App() {
  return (
    <>
    <Router>
      <Header/>
      
      <div className='flex'>
      <Sidebar/>   
      <div className='content'>
        <Home/>
      </div>
        
      </div>

    </Router>
    </>
  );
}

export default App;
