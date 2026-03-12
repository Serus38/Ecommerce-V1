const brands = [
    {
        image: '/img/chevrolet.png',
        alt: 'Chevrolet',
    },
    {
        image: '/img/honda.png',
        alt: 'Honda',
    },
    {
        image: '/img/toyota.png',
        alt: 'Toyota',
    },
    {
        image: '/img/suzuki.png',
        alt: 'Suzuki',
    },
    {
        image: '/img/rollsroyce.png',
        alt: 'Rolls-Royce',
    },
]

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-16 pb-12">
        <h2 className="font-bold text-2xl">Our Brands</h2>

        <p className="w-2/3 text-center text-sm md:text-base">
          Discover our curated selection of premium brands that define quality and style.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
            {brands.map((brand, index) => (
                <div key={index}>
                    <img
                        src={brand.image}
                        alt={brand.alt}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
