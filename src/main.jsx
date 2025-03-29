import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SBDContextProvider } from './context/SideByDarknessContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SBDContextProvider>
      <App />
    </SBDContextProvider>
  </StrictMode>,
)
