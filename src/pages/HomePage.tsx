import { Brands } from "../components/home/Brands"
import { FeatureGrid } from "../components/home/FeatureGrid"
import { ProductGrid } from "../components/home/ProductGrid"
import { popularProducts, recentProducts } from "../data/initialData"
import { prepareProducts } from "../helpers"
import { useProducts } from "../hooks"

export const HomePage = () => {

 const { products, isLoading } = useProducts();

  const preparedRecentProducts = prepareProducts(recentProducts)
  const preparedPopularProducts = prepareProducts(popularProducts)

  return (
    <div>
      <FeatureGrid />

      <ProductGrid 
      title="New Arrivals" 
      products={preparedRecentProducts} />

      <ProductGrid 
      title="Best Sellers" 
      products={preparedPopularProducts} />

      <Brands />
    </div>
  )
}
