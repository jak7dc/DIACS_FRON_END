import { Link } from "react-router-dom";
// w-screen mx-0 max-w-7xl px-0 md:px-0

export function Navbar() {
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
            <Link
              to="/login"
              className="w-39 text-center rounded-lg border border-blue-800/50 px-4 py-2 text-sm text-blue-950 
                          hover:bg-blue-950 hover:text-gray-100 transition">
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )

}