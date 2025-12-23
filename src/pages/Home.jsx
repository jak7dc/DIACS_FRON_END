import { Link } from "react-router-dom";
import { Navbar } from "../components/utilitarios/Navbar.jsx";
import Sidebar from "../components/utilitarios/Sidebar.jsx";

// "min-h-screen bg-gray-950 text-gray-100"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-gray-300">

        </div>
        {/* <Hero /> */}
      </div>
    </div>
  );
}


function Hero() {
  return(
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          DIACKS ERP
        </h1>
        <p className="text-blue-900 max-w-xl mb-8">
          Gestiona tu inventario, ventas y reportes desde una sola plataforma.
        </p>
      </section>
  )
}




