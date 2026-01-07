import { useEffect, useState } from 'react'
import { Navbar } from '../components/utilitarios/Navbar';
import Sidebar from '../components/utilitarios/Sidebar';
import Formulario from '../components/utilitarios/Formulario';
import Modal from '../components/utilitarios/Modal';
import Boton from '../components/utilitarios/Boton';
import Table from '../components/utilitarios/Table';

const Categories = () => {
   const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const formItems = [
    { label: "Nombre de la categoria", name: "category", type: "text" },
    { label: "Descripcion", name: "description", type: "textarea" },
  ];

  const labels = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    {
      key: "acciones",
      label: "Acciones",
      accion: (row) => (
        <div className="flex gap-2">
          <Boton
            name="editar"
            click={() => {
              const selectedCategory = {
                id: row.id,
                category: row.nombre,
                description: row.descripcion,
              };
              setSelectCategory(selectedCategory);
              setOpen(true);
            }}
          />
          <Boton
            name="eliminar"
            click={() => {
              deleteCategory(row.id);
            }}
          />
        </div>
      ),
    },
  ];

  const token = localStorage.getItem("token");
  
  const getCategories = async (token) => {
    try {
      const res = await fetch("http://localhost:8001/inventary/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCategories(data.categories);
    console.log(token)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories(token);
  }, []);

  const createCategory = async (item) => {
    try {
      const res = await fetch(
        "http://localhost:8001/inventary/create_category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: item.category,
            description: item.description,
          }),
        }
      );
      getCategories(token);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editCategory = async (id, item) => {
    try {
      const res = await fetch(
        `http://localhost:8001/inventary/update_category`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: id,
            name: item.category,
            description: item.description,
          }),
        }
      );
      getCategories(token);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8001/inventary/delete_category/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getCategories(token);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = categories.filter((category) =>
    category.nombre.toLowerCase().includes(search.toLowerCase())
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
            title="Nueva categoria"
            fields={formItems}
            formInfo={(data) => {
              if (selectCategory) {
                editCategory(data.id, data);
              } else {
                createCategory(data);
              }
            }}
            initialData={selectCategory}
          />
        }
      />
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <div className="max-w-5xl bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Categorias</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <input
                type="text"
                placeholder="Buscar categoria..."
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
                  setSelectCategory(null);
                  setOpen(true);
                }}
              />
            </div>
          </div>
          <div className="border rounded-2xl p-4">
            <Table labels={labels} data={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories
