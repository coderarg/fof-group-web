import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </HashRouter>,
)
