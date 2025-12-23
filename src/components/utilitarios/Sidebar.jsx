import { NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { useState } from "react";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState(0);

  const menucontent = [
  { icon: <FaBoxesPacking className="text-4xl text-blue-950"/>, label: "Inventario", path: "/inventario"},
  { icon: <FaUsersGear className="text-4xl text-blue-950"/>, label: "Usuarios", path: "/usuarios"},
  ];
   const subMenuContent = [
    [
      // Submenú para "Inventario ==> 0"
      {label : 'Productos'}, {label : 'Categorías'}, {label : 'Entrada de Stock'}, {label : 'Salida de Stock'},
    ],
    [
      // Submenú para "Usuarios ==> 1"
      {label : 'Lista de Usuarios'}, {label : 'Roles y Permisos'}, {label : 'Actividad de Usuarios'},
    ],
  ];



  return (
    <>
    {isOpen ? 
    <SidebarOpen 
      menucontent={menucontent} 
      subMenuContent={subMenuContent[submenu]} 
      setIsOpen={setIsOpen}
      setSubmenu={setSubmenu}
      submenu={submenu} /> 
      : 
      <SidebarClosed 
        menucontent={menucontent} 
        setIsOpen={setIsOpen}/>}
    </>    
  );
}

function SidebarOpen(props) {
  const {menucontent, subMenuContent, setIsOpen, submenu, setSubmenu} = props;
  return (
    <>
      <aside className="px-0 py-0 fixed top-0 left-0 h-screen w-94 h-screen bg-gray-100 border-r-1 border-blue-800 flex flex-col p-4">
      
        {/* CABEZA */}
        <div className="border-b-1 h-15 px-6 flex items-center gap-3 border-blue-800">
          <button 
            onClick={()=>{setIsOpen(false)}}
            className="h-10 w-10 rounded-md flex items-center justify-center hover:cursor-pointer">
            <AiFillAppstore className="text-4xl text-blue-950"/>
          </button>
          <h1 className="text-2xl font-extrabold text-gray-500">
            Sistema de Gestión
          </h1>
        </div>
        {/* FIN CABEZA */}

        {/* MENU */}
        <div className="flex h-full">
          <div className="w-1/3 border-r-1 border-blue-800/50 flex flex-col px-2">
            {menucontent.map((item, index) => (
              <div key={index} className="p-2 flex flex-col ">
                {index == submenu ? (
                  <button className="p-3 border-l-2 border-blue-100/0 flex flex-col items-center gap-1
                                    rounded-r-lg w-full text-left border-l-2 
                                    border-blue-800/50" >
                  {item.icon}
                  <p className="text-base">{item.label}</p>
                </button>
                ):
                (
                  <button 
                    onClick={()=>{setSubmenu(index)}}
                    className="p-3 border-l-2 border-blue-100/0 flex flex-col items-center gap-1
                                    rounded-r-lg w-full text-left
                                    hover:border-blue-800/50 hover:border-l-2 hover:cursor-pointer 
                                    hover:bg-blue-100/45
                                    transition-all duration-30" >
                  {item.icon}
                  <p className="text-base">{item.label}</p>
                </button>
                )}
              </div>                        
            ))}
          </div>
          <div className="flex flex-col w-2/3">
            {subMenuContent.map((subItem, subIndex) => (
              <div className="py-1 px-3" key={subIndex}>
                <button className="p-3 border-l-2 border-blue-100/0 flex flex-col gap-1
                                    rounded-r-lg w-full text-left
                                    hover:border-blue-800/50 hover:border-l-2 hover:cursor-pointer 
                                    hover:bg-blue-100/45
                                    transition-all duration-30">{subItem.label}</button>
              </div>
            ))}
          </div>
        </div>
        
      
        {/* FOOTER */}
        <div className="mt-auto text-xs text-gray-500 border-t-1 border-blue-800/50">
          <p className="p-2 px-6" >© 2025 DIACS V.0.1</p>
        </div>
      </aside>  
    </>
  )
}

function SidebarClosed(props) {
  const {menucontent, setIsOpen} = props; 
  return(
    <>
      <aside className="px-0 py-0 fixed top-0 left-0 h-screen w-18 h-screen bg-gray-100 border-r-1 border-blue-800 flex flex-col p-4">
          
            <div className="flex justify-center gap-3 border-b-1 h-12 m-1 px-6 items-center border-blue-800/50">
              <button 
                onClick={()=>{setIsOpen(true)}}
                className="h-14 rounded-md flex items-center justify-center hover:cursor-pointer">
                <AiFillAppstore className="text-4xl text-blue-950"/>  
              </button>
            </div>
            {menucontent.map((item, index) => (
              <div className="m-1 p-1 justify-center flex" key={index}>
                <button key={index}>
                  {item.icon}
                </button>
              </div>
            ))}
        </aside>
      </>
  )
}
