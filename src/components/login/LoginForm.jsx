import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function LoginForm() {
  const { login, token } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="w-full max-w-sm p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Iniciar Sesión
      </h2>
      <form className="space-y-5">
        <div>
          <label className="block text-white/80 text-sm mb-1">
            Id de usuario
          </label>
          <input
            {...register("usuario")}
            type="email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Id o documento"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-1">Contraseña</label>
          <input
            {...register("contraseña")}
            type="password"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="********"
          />
        </div>
        <button
          type="button"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition-all"
          onClick={handleSubmit(onSubmit)}
        >
          Entrar
        </button>
      </form>

      <p className="p-4 text-center text-sm text-white/70">
        ¿Olvidaste tu contraseña?, comunícate con el administrador.
      </p>
    </div>
  );
}
