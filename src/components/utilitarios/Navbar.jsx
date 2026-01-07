import { Link } from "react-router-dom";
import Boton from "./Boton";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return(
    <nav className="bg-gray-100 border-b border-blue-800/50 px-0 mx-0">
      <div className="mx-6">
        <div className="w-full flex h-13 justify-between items-center">

          {/* LOGO */}
          <div className="flex p-25 gap-20 items-center">
              <Link to="/" className="text-3xl font-bold text-blue-950" >Diacs</Link>
              <p className="font-bold text-blue-950 text-lg">Inicio</p>
          </div>

          {/* FIN LOGO */}

          {/* LINKS DESKTOP */}
          
          {/* FIN LINKS */}


          {/* ACCIONES */}
          <div className="hidden md:flex gap-4">
            <Boton name="Cerrar Sesión" click={() => {logout(); navigate("/login");}} />
          </div>
        </div>
      </div>
    </nav>
  )

}