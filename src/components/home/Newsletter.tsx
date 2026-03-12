export const Newsletter = () => {
  return (
    <div className="relative bg-gray-500 text-white py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full" 
        style={{ backgroundImage: 'url(/img/newsletter.png)' }}
      />

      {/* Content */}
      <div className="container z-10 relative p-5 md:p-10">
        <div className="w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%]">
          <p className="text-xs uppercase font-semibold">¡No te pierdas nuestras ofertas!</p>
          <p className="text-xs uppercase font-semibold">Introduce tu correo electrónico para recibir las últimas ofertas y noticias.</p>
          <form className="flex flex-col xl:flex-row gap-5">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="border border-cyan-800 flex items-center gap-2 px-3 py-2 rounded-full"
            />
            <button
              type="submit"
              className="bg-cyan-900 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
