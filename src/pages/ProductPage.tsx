import { Link, useNavigate, useParams } from "react-router-dom";
import { Separator } from "../components/shared/Separator";
import { formatPrice } from "../helpers";
import { LuMinus, LuPlus } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";
import { GridImages } from "../components/one-product/GridImages";
import { useProduct } from "../hooks/products/useProduct";
import { use, useEffect, useMemo, useState } from "react";
import type { VariantProduct } from "../interfaces";
import { ProductDescription } from "../components/one-product/ProductDescription";
import { Tag } from "../components/shared/Tag";
import { Loader } from "../components/shared/Loader";
import { useCounterStore } from "../store/counter.store";
import { useCartStore } from "../store/cart.store";
import toast from "react-hot-toast";

interface Acc {
  [key: string]: {
    name: string;
  };
}

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [currentSlug, setCurrentSlug] = useState(slug);

  const { product, isLoading, isError } = useProduct(currentSlug || "");

  const [selectedColor, setselectedColor] = useState<string | null>(null);

  //TODO: Manejar la seleccion de color y variantes, en caso de tener opciones de almacenamiento, RAM, etc, se pueden agregar aquí para luego mostrarlas en el UI
  /*const const [selectedStorage, setselectedStorage] = useState<string | null>(
    null
  )*/

  const [selectedVariant, setselectedVariant] = useState<VariantProduct | null>(
    null,
  );

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const addItem = useCartStore((state) => state.addItem);

  const navigate = useNavigate();

  //Agrupar variantes por color
  const colors = useMemo(() => {
    return (
      product?.variants.reduce((acc: Acc, variant: VariantProduct) => {
        const { color, color_name } = variant;
        if (!acc[color]) {
          acc[color] = {
            name: color_name,
            //storage: [] // en caso de tener opciones de almacenamiento, RAM, etc, se pueden agregar aquí para luego mostrarlas en el UI
          };
        }

        return acc;
      }, {} as Acc) || {}
    );

    // en caso de tener opciones de almacenamiento, RAM, etc, se pueden agregar aquí para luego mostrarlas en el UI
    /*if(!acc[color].storages.includes(storage)) {
      acc[color].storages.push(storage)*/
  }, [product?.variants]);

  //Obtenemos las variantes del color predeterminado si no se ha seleccionado un color, o las variantes del color seleccionado
  const avialableColors = Object.keys(colors);
  useEffect(() => {
    if (!selectedColor && avialableColors.length > 0) {
      setselectedColor(avialableColors[0]);
    }
  }, [avialableColors, selectedColor]);

  //Obtenemos la variante seleccionada, en caso de tener opciones de almacenamiento, RAM, etc, se puede agregar aquí para luego mostrarla en el UI
  /*useEffect(() => {
    if (selectedColor && colors[selectedColor] && !selectedStorage) {
      setSelectedStorage(colors[selectedColor].storages[0])
    }
  }, [selectedColor, colors, selectedStorage])*/

  //Obtener la variante seleccionada
  useEffect(() => {
    if (selectedColor /*&& selectedStorage*/ && product?.variants) {
      const variant = product.variants.find(
        (variant) => variant.color === selectedColor,
      );
      /*&& variant.storage === selectedStorage)*/

      setselectedVariant(variant as VariantProduct);
    }
  }, [selectedColor, product?.variants]);

  //Obtener el Stock
  const isOutOfStock = selectedVariant?.stock === 0;

  //Funcion para añadir al carrito
  const addToCart = () => {
    if (selectedVariant) {
      addItem({
        variantId: selectedVariant.id,
        productId: product?.id || "",
        name: product?.name || "",
        image: product?.images[0] || "",
        color: selectedVariant.color_name,
        //storage: selectedVariant.storage,
        price: selectedVariant.price,
        quantity: count,
      });
      toast.success("Producto añadido al carrito", {
        position: "bottom-right",
      });
    }
  };

  //Funcion para comprar ahora
  const buyNow = () => {
    if (selectedVariant) {
      addItem({
        variantId: selectedVariant.id,
        productId: product?.id || "",
        name: product?.name || "",
        image: product?.images[0] || "",
        color: selectedVariant.color_name,
        //storage: selectedVariant.storage,
        price: selectedVariant.price,
        quantity: count,
      });

      navigate("/chekout");
    }
  };

  //Resetear el estado cuando se cambia de producto
  useEffect(() => {
      setCurrentSlug(slug)

      //Reiniciar color, almacenamiento, RAM, etc
      setselectedColor(null);
      //setselectedStorage(null);
      setselectedVariant(null);
    }, [slug])

  if (isLoading) return <Loader />;

  if (!product || isError)
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );

  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        {/*Product Image*/}
        <GridImages images={product.images} />

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

          <div className="flex gap-5 items-center">
            <span className="tracking-wide text-lg font-semibold">
              {formatPrice(selectedVariant?.price || product.variants[0].price)}
            </span>
            <div className="relative">
              {/* TAG: Out of Stock */}
              {isOutOfStock && <Tag contentTag="Agotado" />}
            </div>
          </div>

          <Separator />
          {/*Caracteristicas del producto*/}
          <ul className="space-y-2 ml-7 my-10">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="text-sm flex items-center gap-2 tracking-tight font-medium"
              >
                <span className="bg-black w-[6px] h-[6px] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <p>Color: {selectedColor && colors[selectedColor].name}</p>
            <div className="flex gap-3">
              {avialableColors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full flex justify-center items-center ${
                    selectedColor === color
                      ? "border border-slate-800"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setselectedColor(color)}
                >
                  <span
                    className="w-[26px] h-[26px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>

            {/*TODO: Manejar la seleccion de color y variantes, en caso de tener opciones de almacenamiento, RAM, etc, se pueden agregar aquí para luego mostrarlas en el UI
            {/*TODO: Opciones de almacenamiento, RAM, etc
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium">
                {/*En caso de ser un producto con opciones, como almacenamiento, RAM, etc
                Almacenamiento disponible
              </p>

              {
                selectedColor && (
                  <div className="flex gap-3">
                <select 
                  className="border border-gray-300 rounded-lg px-3 py-1"
                  value={selectedStorage || ""}
                  onChange={(e) => setselectedStorage(e.target.value)}
                >
                  {
                    colors[selectedColor].storages.map((storage) => (
                    <option 
                      value={storage}
                      key={storage}
                      >{storage}</option>
                    ))
                  }
                </select>
              </div>
                )
              }
            </div>
            */}
          </div>

          {/*Comprar ahora*/}
          {isOutOfStock ? (
            <button
              className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] w-full"
              disabled
            >
              Agotado
            </button>
          ) : (
            <>
              {/*Contador de stock*/}
              <div className="space-y-3">
                <p className="text-sm font-medium">Stock disponible:</p>

                <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                  <button onClick={decrement} disabled={count === 1}>
                    <LuMinus size={15} />
                  </button>
                  <span className="text-slate-500 text-sm">{count}</span>
                  <button onClick={increment}>
                    <LuPlus size={15} />
                  </button>
                </div>
              </div>

              {/*Botones de accion*/}
              <div className="flex flex-col gap-3">
                <button
                  className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2]"
                  onClick={addToCart}
                >
                  Agregar al carrito
                </button>
                <button
                  className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-gray-800"
                  onClick={buyNow}
                >
                  Comprar ahora
                </button>
              </div>
            </>
          )}

          <div className="flex pt-2">
            <div className="flex flex-col gap-1 flex-1 items-center">
              <CiDeliveryTruck size={30} />
              <p className="text-xs font-semibold">Envio gratis</p>
            </div>

            <Link
              to="#"
              className="flex flex-col gap-1 flex-1 items-center justify-center"
            >
              <BsChatLeftText size={30} />
              <p className="flex flex-col items-center text-xs">
                <span className="font-semibold">Contact Us</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/*Product Description, Reviews, etc*/}
      <ProductDescription content={product.description} />
    </>
  );
};
