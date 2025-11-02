import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './components/Menu'
import Header from './components/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <Menu />
      <Header />
    </div>
  </StrictMode>,
)
