import { Link } from "react-router-dom"

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 white-text">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full" 
        style={{ backgroundImage: 'url(/img/tienda.jpg)' }}
        />

        {/*Overlay*/}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col text-white items-center justify-center py-20 px-4 text-center lg:px-40 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
                Bienvenido a E-Shop
            </h1>

            <p className="text-lg mb-8 text-white lg:text-2xl">
                Tu destino número uno para todo lo relacionado con las compras en línea.
            </p>

            <Link to="/products" className="bg-cyan-900 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Explorar Productos
            </Link>
        </div>
    </div>
  )
}

