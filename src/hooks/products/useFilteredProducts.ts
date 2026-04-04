import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../actions/product";

/// Hook para obtener productos filtrados por página y marcas
export const useFilteredProducts = ({
  page,
  brands,
}: {
  page: number;
  brands: string[];
}) => {
  // Utilizamos useQuery para obtener los productos filtrados
  const {data, isLoading} = useQuery({
    queryKey: ["filteredProducts", page, brands],
    queryFn: () => getFilteredProducts ({ page, brands }),
    retry: false,
  });
  // Retornamos los datos, el estado de carga y el total de productos
  return {
    data: data?.data,
    isLoading,
    totalProducts: data?.count ?? 0,
  };
};
