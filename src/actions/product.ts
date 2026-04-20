import { supabase } from "../supabase/client";

// Función para obtener todos los productos con sus variantes
export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

// Función para obtener productos filtrados por marca y paginados
export const getFilteredProducts = async ({
  page = 1,
  brands = [],
}: {
  page: number;
  brands: string[];
}) => {
  const itemPerPage = 10;
  const from = (page - 1) * itemPerPage;
  const to = from + itemPerPage - 1;

  let query = supabase
    .from("products")
    .select("*, variants(*)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (brands.length > 0) {
    query = query.in("brand", brands);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return { data, count };
};

// Función para obtener los productos más recientes
export const getRecentProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

// Función para obtener productos aleatorios (en este caso, los más recientes)
export const getRandomProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .limit(20);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  //Seleccionamos 4 productos aleatorios de la lista obtenida
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return randomProducts;
};

// Función para obtener un producto por su slug
export const getProductBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .eq("slug", slug)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return data;
};

export const searchProducts = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .ilike("name", `%${searchTerm}%`); //Busca productos cuyo nombre contenga el término de búsqueda (case-insensitive)

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  return data;

};
