
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    
    <Route path={"/dashboard"} element={
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
        
    }/>   

    
  
    <Route path={"/"} element={<LoginPage/>}/>   

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
