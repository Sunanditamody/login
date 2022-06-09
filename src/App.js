
import './App.css';
import Homepage from './component/Homepage/Homepage';
import Login from './component/login/Login';
import Register from './component/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  
  return (
  <div>
   <>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
          
        <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          
        
      </Routes>
    </BrowserRouter>

   </>
  </div>
    
  );
}

export default App;
