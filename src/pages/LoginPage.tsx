import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-full flex flex-col items-center mt-12 gap-5">
      <h1 className="text-4xl font-bold capitalize">Login</h1>

      <p className="text-sm font-medium">
        ¡Bienvenido de nuevo! Por favor, ingresa tus credenciales para acceder a
        tu cuenta.
      </p>

      <>
        <form className="flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-black text-white uppercase font-semibold tracking-widest text-sm py-4 rounded-full mt-5 w-full">
            Iniciar sesión
          </button>
        </form>

        <p className="text-sm text-stone-800">
          ¿No tienes una cuenta?
          <Link to="/register" className="underline ml-2">
            Regístrate aquí
          </Link>
        </p>
      </>
    </div>
  );
};
