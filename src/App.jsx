import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
function App() {
  

  return (
    <>
    
     <Routes>

        <Route path="/" element={<Login/>}/>     
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>       

     </Routes>

    </>
  )
}

export default App
