import { useState } from "react";
import Boton from "./utilitarios/Boton";
import Modal from "./utilitarios/Modal";
import Table from "./utilitarios/Table";
import Formulario from "./utilitarios/Formulario";

//commit de prueba

const Cabecera = () => {
  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState();

  const formData = [
    { label: "Nombre del producto", name: "producto", type: "text" },
    { label: "Cantidad", name: "cantidad", type: "number" },
    { label: "Precio", name: "precio", type: "number" },
    { label: "Descripción", name: "descripcion", type: "textarea" },
  ]

  const label = [
    { key: "id", label: "ID" },
    { key: "name", label: "Nombre" },
    {
      key: "accion",
      label: "Accion",
      accion: (row) => (
        <div className="flex gap-2">
          <Boton
            name="seleccionar"
            click={() => {
              handleRowClick(row);
            }}
          />
        </div>
      ),
    },
  ];
  const clientes = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "María Gómez" },
    { id: 3, name: "Carlos Ruiz" },
    { id: 4, name: "Ana Torres" },
  ];
  const bodegas = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
  ];
  const [selecData, setSelecData] = useState(clientes);

  const handleRowClick = (cliente) => {
    setCliente(cliente);
    setOpen(false);
  };
  return (
    <div className="w-full border rounded-xl p-4 bg-white flex gap-4">
      <Modal
        abrir={open}
        cerrar={() => setOpen(false)}
        contenido={
          open == "clientes" ? <Table labels={label} data={selecData} /> : <Formulario title="Datos de producto" fields={formData}/>
        }
        acciones={
          open == "clientes" ? (
            <div className="flex gap-4">
              <Boton name="Clientes" click={() => setSelecData(clientes)} />
              <Boton name="Bodegas" click={() => setSelecData(bodegas)} />
            </div>
          ) : null
        }
      />
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Cliente</label>
          <div className="flex gap-2 items-center">
            <input
              placeholder="ID"
              className="w-10 border rounded px-2 py-1 text-sm"
              value={cliente?.id || ""}
              onChange={(e) => setCliente(e.target.value)}
            />
            <input
              placeholder="Cliente"
              className="w-50 border rounded px-2 py-1"
              value={cliente?.name || ""}
              onChange={(e) => setCliente(e.target.value)}
            />
            <Boton
              name=".:."
              className="border rounded px-2 py-1 hover:bg-gray-100"
              click={() => setOpen("clientes")}
            />
            <Boton
              name="limpiar"
              className="border rounded px-2 py-1 hover:bg-gray-100"
              click={() => setCliente(null)}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nota</label>
          <input
            name="nota"
            placeholder="Nota"
            className="w-97.5 border rounded px-3 py-1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="border rounded h-27 px-3 py-2 resize-none w-65"
        />
        {/* <div className="flex gap-2 py-1 justify-end">
          <Boton name="nuevo" click={() => setOpen("nuevo")} />
          <Boton name="editar" click={() => setOpen("editar")} />
          <Boton name="eliminar" />
        </div> */}
      </div>
    </div>
  );
};

export default Cabecera;
