import Boton from "./Boton";

const Formulario = ({ title, fields = [] }) => {
  return (
    <form className="w-90 sm:max-w-md  mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-center mb-4">
        {title}
      </h3>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              rows={4}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}
      <div className="flex justify-end gap-3 pt-4">
        <Boton name="cancelar"/><Boton name="Guardar"/>
      </div>
    </form>
  );
};

export default Formulario;
