import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
)
