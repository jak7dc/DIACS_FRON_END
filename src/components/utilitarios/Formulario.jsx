import { useEffect } from "react";
import Boton from "./Boton";
import { useForm } from "react-hook-form";

const Formulario = ({ title, fields = [], formInfo, initialData }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({});
    }
  }, [initialData, reset]);

  const onSubmit = (data) => {
    formInfo(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-90 sm:max-w-md  mx-auto bg-white rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            {field.label}
          </label>

          {field.name === "categoria" ? (
            <div className="flex gap-2">
              <input
                type="number"
                {...register(field.name)}
                className="w-16 text-center border rounded-lg px-2 py-2 text-sm"
              />

              <input
                type="text"
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : field.type === "textarea" ? (
            <textarea
              {...register(field.name)}
              rows={4}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              type={field.type}
              {...register(field.name)}
              disabled={field.disabled}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}
      <div className="flex justify-end gap-3 pt-4">
        <Boton name="Guardar" />
      </div>
    </form>
  );
};

export default Formulario;
