import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { Resume } from './pages/resume'
import { Portfolio } from './pages/portfolio'
import { Contacts } from './pages/contacts'
import { Layout } from './components/layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route 
            path="/" 
            element={<Resume/>} 
          />
          <Route 
            path="/about"
            element={<AboutPage />}
          />
          <Route 
            path="/portfolio" 
            element={<Portfolio />} 
          />
          <Route 
            path="/contacts"
            element={<Contacts />}
          />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
