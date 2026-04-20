import { HiOutlineShoppingBag } from "react-icons/hi";
import { useGlobalStore } from "../../store/global.store";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CartItem } from "./CartItem";
import { useCartStore } from "../../store/cart.store";

export const Cart = () => {
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const cartItems = useCartStore((state) => state.items);
  const cleanCart = useCartStore((state) => state.cleanCart);
  const totalItemsInCart = useCartStore((state) => state.totalItems);

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-7 flex justify-between items-center border-b border-slate-200">
        <span className="flex gap-3 items-center font-semibold">
          <HiOutlineShoppingBag size={20} /> {totalItemsInCart} Articulos
        </span>
        <button onClick={closeSheet}>
          <IoMdClose size={25} className="text-black" />
        </button>
      </div>

      {totalItemsInCart > 0 ? (
        <>
        {/*Contenido del carrito*/}
          <div className="p-7 overflow-auto flex-1">
            <ul className="space-y-9">
              {cartItems.map((item) => (
                <CartItem key={item.variantId} item={item} />
              ))}
            </ul>
          </div>

          {/*Botones de acciones*/}
          <div className="mt-4 p-7">
            <Link
              to={"/checkout"}
              className="w-full bg-black text-white py-3.5 rounded-full flex itmes-center justify-center gap-3"
            >
              <RiSecurePaymentLine size={24} />
              Ir a pagar
            </Link>

            <button
              className="mt-3 w-full text-black border border-black rounded-full py-3"
              onClick={cleanCart}
            >
              Limpiar carrito
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-7">
          <p className="text-sm font-medium tracking-tight">
            Su carrito esta vacio
          </p>
          <Link to="/products"
              className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 px-7 rounded-full transition-all duration-300 hover:bg-gray-800"
              onClick={closeSheet}
            >
              Explorar productos
          </Link>
        </div>
      )}
    </div>
  );
};
