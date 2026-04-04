import { useQueries } from "@tanstack/react-query";
import { getRandomProducts, getRecentProducts } from "../../actions/product";


export const useHomeProducts = () => {
  const results = useQueries({
    queries: [
        {
            queryKey: ["recentProducts"],
            queryFn: getRecentProducts,
        },
        {
            queryKey: ['popularProducts'],
            queryFn: getRandomProducts,
        }
    ],
  });

  const [ recentProductsResult, popularProductsResult ] = results; // [resultado Query 1, resultado Query 2]

  //Combinar los resultados de ambas queries en un solo objeto
  const isLoading = recentProductsResult.isLoading || popularProductsResult.isLoading;
  const isError = recentProductsResult.isError || popularProductsResult.isError;


  return { 
    recentProducts: recentProductsResult.data || [],
    popularProducts: popularProductsResult.data || [],
    isLoading,
    isError,
    
};
};