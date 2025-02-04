import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import GameDownload from './components/GameDownload';
import HomePage from './components/HomePage';
import ItemsWiki from './components/ItemsWiki';


function App() {
 

  return (
    <>
       <Router>
            <Navbar />
            <Routes>
            <Route path = {"/aboutus"} element = {<AboutUs />}/>
            <Route path = {"/download"} element = {<GameDownload />}/>
            <Route path = {"/"} element = {<HomePage />}/>
            <Route path = {"/itemswiki"} element = {<ItemsWiki />}/>
            </Routes>
          </Router>
    </>
  )
}

export default App
