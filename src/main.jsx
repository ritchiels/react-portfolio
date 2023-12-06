import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { StateProvider } from './StateContext.js'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StateProvider>
            <NavBar />
            <App />
        </StateProvider>
    </React.StrictMode>,
)