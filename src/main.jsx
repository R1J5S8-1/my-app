import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Body from './Components/Body.jsx'
import Display from './Components/Display.jsx'
import Showcase from './Components/Showcase.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    <Display />
    <Showcase />
    <Footer />
  </StrictMode>,
)
