import LoginPage from "./pages/login/LoginPage.jsx";
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<h1>Ruta no encontrada</h1>} />
        </Routes>
    </>
  )
  
}

export default App;
