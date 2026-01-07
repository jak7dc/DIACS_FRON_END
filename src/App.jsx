import Categories from "./pages/Categories.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import Products from "./pages/Products.jsx";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const PrivateRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute><Categories /></PrivateRoute>} />
        <Route path="*" element={<h1>Ruta no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
