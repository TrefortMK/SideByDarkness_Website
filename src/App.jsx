import { Profiler, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import GameDownload from './components/GameDownload';
import HomePage from './components/HomePage';
import ItemsWiki from './components/ItemsWiki';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Register from './components/Register';
import SBDContext, { SBDContextProvider } from './context/SideByDarknessContext';


function App() {
  const { theme } = useContext(SBDContext);

  return (
    <div data-theme={theme} className="flex flex-col grow w-full h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/aboutus"} element={<AboutUs />} />
          <Route path={"/download"} element={<GameDownload />} />
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/itemswiki"} element={<ItemsWiki />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
