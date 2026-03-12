import type { PreparedProduct } from "../../interfaces";
import { CardProduct } from "../products/CardProduct";

interface Props {
    title: String;
    products: PreparedProduct[];
}

export const ProductGrid = ({title, products}: Props ) => {
  return (
    <div className="my-32">
        <h2 className="3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">{title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
            {products.map((product) => (
                <CardProduct 
                key={product.id}
                name={product.name}
                img={product.images[0]}
                price={product.price}
                slug={product.slug}
                colors={product.colors}
                variants={product.variants}
                />
            ))}
        </div>


    </div>
  )
}
