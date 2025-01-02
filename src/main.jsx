import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 
import CodeTesting from '../codetesting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <CodeTesting/>
  </StrictMode>,
)
