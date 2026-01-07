import Boton from "./Boton";

const Modal = ({ abrir, cerrar, contenido, acciones }) => {
  return !abrir ? null : (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-xl shadow-lg mx-4 w-auto max-w-[95vw] max-h-[90vh] overflow-auto">
        <div className="pt-6 pr-6 flex justify-end">
          <Boton
            name="X"
            click={cerrar}
            className="text-gray-500 hover:text-black text-xl"
          />
        </div>
        <div className="flex justify-center px-4">
          {acciones}
        </div>
        <div className="p-6 overflow-y-auto">
          {contenido}
        </div>
      </div>
    </div>
  );
};

export default Modal;
