const Boton = ({name, click}) => {
  return (
    <button onClick={click} className="border border-blue-800 rounded-[10px] cursor-pointer py-1 px-4 text-blue-950 hover:bg-blue-950 hover:text-gray-100">
      {name}
    </button>
  )
}

export default Boton
