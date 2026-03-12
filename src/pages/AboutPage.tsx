export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-semibold tracking-tight mb-5">
        About Us
      </h1>

      <img src="" alt="Imagen de fondo"
      className="h-[500] w-full object-cover" />

      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>Welcome to our e-commerce store! We are dedicated to providing the best products and customer service.
        </p>
        <p>Our mission is to offer a wide range of high-quality products at competitive prices, while ensuring a seamless shopping experience for our customers.
        </p>
        <p>We believe in building long-term relationships with our customers, and we strive to exceed their expectations with every purchase.
        </p>
        <p>Thank you for choosing us as your go-to online shopping destination. We look forward to serving you!
        </p>

        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4">
          ¡Bienvenido a Nuestra Tienda!
        </h2>

        <p>En nuestra tienda, nos apasiona ofrecer productos de alta calidad y un servicio excepcional a nuestros clientes. Nos esforzamos por crear una experiencia de compra única y satisfactoria para cada persona que visita nuestro sitio.
          <a href="mailto:matambita08@gmail.com">matambita08@gmail.com</a> o llamando al <a href="tel:+1234567890">+1234567890</a>.
        </p>

      </div>
    </div>
  )
}
