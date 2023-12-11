import React from 'react'
import ReactDOM from 'react-dom/client'
import { StateProvider } from './StateContext.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <StateProvider>
                <NavBar />
                <App />
            </StateProvider>
        </ThemeProvider>
    </React.StrictMode>
)