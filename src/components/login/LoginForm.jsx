export default function LoginForm() {
  return (
    <div className="w-full max-w-sm p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Iniciar Sesión
      </h2>

      <form className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-white/80 text-sm mb-1">Correo</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="usuario@correo.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-white/80 text-sm mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="********"
          />
        </div>

        {/* Botón */}
        <button
          type="button"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition-all"
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
