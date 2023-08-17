import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Prova from './prova.jsx'
import './prova.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Prova />
    <App />
  </React.StrictMode>,
)
