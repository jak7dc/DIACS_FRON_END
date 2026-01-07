import { useEffect, useState } from "react";
import Boton from "../components/utilitarios/Boton";
import { Navbar } from "../components/utilitarios/Navbar";
import Sidebar from "../components/utilitarios/Sidebar";
import Table from "../components/utilitarios/Table";
import Modal from "../components/utilitarios/Modal";
import Formulario from "../components/utilitarios/Formulario";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const formItems = [
    { label: "Nombre del producto", name: "producto", type: "text" },
    { label: "Cantidad", name: "cantidad", type: "number", disabled: "false" },
    { label: "Unidad", name: "unidad", type: "number", disabled: "false" },
    { label: "Descripcion", name: "descripcion", type: "textarea",},
    { label: "ID Categoria", name: "categoria", type: "number" },
  ];

  const labels = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "cantidad", label: "Cantidad" },
    { key: "unidades", label: "Unidad" },
    { key: "descripcion", label: "Descripcion" },
    { key: "categoria_id", label: "ID Categoria" },
    { key: "categoria", label: "Categoria" },
    {
      key: "acciones",
      label: "Acciones",
      accion: (row) => (
        <div className="flex gap-2">
          <Boton
            name="editar"
            click={() => {
              const selectedProduct = {
                id: row.id,
                producto: row.nombre,
                cantidad: row.cantidad,
                unidad: row.unidades,
                descripcion: row.descripcion,
                categoria: row.categoria_id,
              };
              setSelectProduct(selectedProduct);
              setOpen(true);
            }}
          />
          <Boton
            name="eliminar"
            click={() => {
              deleteProduct(row.id);
            }}
          />
        </div>
      ),
    },
  ];

  const getProducts = async (token) => {
    try {
      const res = await fetch("http://localhost:8001/inventary/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(token);
  }, []);

  const createProduct = async (item) => {
    try {
      const res = await fetch(
        "http://localhost:8001/inventary/create_product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: item.producto,
            description: item.descripcion,
            category_id: item.categoria,
          }),
        }
      );
      getProducts(token);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id, item) => {
    try {
      const res = await fetch(
        `http://localhost:8001/inventary/update_product`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: id,
            name: item.producto,
            description: item.descripcion,
            category_id: item.categoria,
          }),
        }
      );
      getProducts(token);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8001/inventary/delete_product/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getProducts(token);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Modal
        abrir={open}
        cerrar={() => setOpen(false)}
        contenido={
          <Formulario
            title="Nuevo Producto"
            fields={formItems}
            formInfo={(data) => {
              if (selectProduct) {
                editProduct(data.id, data);
              } else {
                createProduct(data);
              }
            }}
            initialData={selectProduct}
          />
        }
      />
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Productos</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="w-md h-9 border border-blue-800 focus:outline-none focus:border-blue-800 focus:border-2 rounded-lg px-3 py-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Boton name="🔍" />
            </div>
            <div className="mb-6">
              <Boton
                name="+"
                click={() => {
                  setSelectProduct(null);
                  setOpen(true);
                }}
              />
            </div>
          </div>
          <div className="border rounded-2xl p-4 space-y-3">
            <Table labels={labels} data={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
