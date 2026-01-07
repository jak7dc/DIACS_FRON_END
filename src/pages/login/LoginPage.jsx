import LoginForm from "../../components/login/LoginForm";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-cyan-900 relative">
      
      {/* Título del sistema */}
      <div className="absolute top-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Sistema de Gestión ⚙️
        </h1>
        <p className="text-white/70 text-sm">Acceso de usuarios</p>
      </div>

      <LoginForm />
    </div>
  );
}
