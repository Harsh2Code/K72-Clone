import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Stairs from './Components/Common/Stairs.jsx'
import NavContext from './Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavContext >
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
