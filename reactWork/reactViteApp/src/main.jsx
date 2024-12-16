import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProps from './AppProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProps />
  </StrictMode>,
)
