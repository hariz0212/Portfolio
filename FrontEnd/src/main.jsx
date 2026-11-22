import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import InterfaceProvider from './context/InterfaceProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterfaceProvider>
      <App />
    </InterfaceProvider>
  </StrictMode>,
)
