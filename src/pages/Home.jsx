import { Navbar } from "../components/utilitarios/Navbar.jsx";
import Sidebar from "../components/utilitarios/Sidebar.jsx";
import Table from "../components/utilitarios/Table.jsx";
import Cabecera from "../components/Cabecera.jsx";
import Boton from "../components/utilitarios/Boton.jsx";
import { useAuth } from "../context/AuthContext.jsx";

// "min-h-screen bg-gray-950 text-gray-100"

export default function Home() {
  const items = [
    { id: 1, producto: "Teclado", cantidad: 10, precio: 50 },
    { id: 2, producto: "Mouse", cantidad: 20, precio: 25 },
  ];
  const print = (item) => {
    console.log(item.id);
  };
  const labels = [
    { key: "id", label: "ID" },
    { key: "producto", label: "Producto" },
    { key: "cantidad", label: "Cantidad" },
    { key: "precio", label: "Precio" },
    {
      key: "acciones",
      label: "Acciones",
      accion: (row) => (
        <div className="flex gap-2">
          <Boton
            name="editar"
            click={() => {
              print(row);
            }}
          />
          <Boton
            name="eliminar"
            click={() => {
              print(row);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <Sidebar />
      <div>
        <div className="pl-20 pr-2 py-3 w-200">
          <div>
            <Cabecera />
            <div className="bg-white rounded-2xl border mt-4 p-2">
              <div className="flex justify-between pt-2 pb-1 bg-white mb-0.5 mt-2 px-4">
                <h2 className="text-lg font-semibold text-center">
                  Lista de Productos
                </h2>
                <Boton name="agregar" />
              </div>
              <Table labels={labels} data={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
        DIACKS ERP
      </h1>
      <p className="text-blue-900 max-w-xl mb-8">
        Gestiona tu inventario, ventas y reportes desde una sola plataforma.
      </p>
    </section>
  );
}