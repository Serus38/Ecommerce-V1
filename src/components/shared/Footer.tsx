import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import { socialLinks } from "../../constants/links"

export const Footer = () => {
  return (
  <footer className="py-10 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">

    <Link 
        to="/" className={"text-2xl font-bold tracking-tighter transition-all text-white flex-1"}
    >
        E-Shop
    </Link>

    <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">
            Your one-stop shop for everything!
        </p>
        <p className="text-xs font-medium">
            Suscribete a nuestro boletín para recibir las últimas ofertas y novedades.
        </p>

        <div className="border border-cyan-800 flex items-center gap-2 px-2 py-2 rounded-full bg-gray-950">
            <input 
            type="email"
            placeholder="Correo Electrónico"
            className="pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none" />

            <button className="bg-cyan-600 text-white px-2 py-2 rounded-full md:py-2 w-full md:w-auto">
                <BiChevronRight size={20} />
            </button>
        </div>
    </div>

    <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">
            Enlaces Rápidos
        </p>

        <nav className="flex flex-col gap-2 text-xs font-medium">
            <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Contacto
            </Link>
            <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Política de Privacidad
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Términos de Servicio
            </Link>
        </nav>
    </div>

    <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">
            Siguenos
        </p>

        <p className="text-xs leading-6">
            Síguenos en nuestras redes sociales para estar al tanto de las últimas ofertas, novedades y promociones exclusivas. ¡No te pierdas nada!
        </p>

        <div className="flex">
            {
            socialLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    target="blank"
                    rel="noreferrer"
                    className="text-slate-300 w-full h-full hover:text-cyan-400 py-3.5 transition-all flex items-center justify-center transition-colors "
                >
                    {link.icon}
                </a>
            ))
        }
        </div>
    </div>
  </footer>
    )
}
