import { Link } from "react-router-dom"
import { Separator } from "../components/shared/Separator"
import { formatPrice } from "../helpers"
import { LuMinus, LuPlus } from "react-icons/lu"
import { CiDeliveryTruck } from "react-icons/ci"
import { BsChatLeftText } from "react-icons/bs"
import { GridImages } from "../components/one-product/GridImages"

export const ProductPage = () => {
  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        {/*Product Image*/}
        <GridImages images={[]} />

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">
            Product Name
          </h1>

            <div className="flex gap-5 items-center">
              <span className="tracking-wide text-lg font-semibold">
                {formatPrice(1000)}
              </span>
              <div className="relative">
                {/* TAG: Out of Stock */}
                  <span>Out of Stock</span>
              </div>
            </div>


          <Separator />
          {/*Caracteristicas del producto*/}
          <ul className="space-y-2 ml-7 my-10">
            <li className="text-sm flex items-center gap-2 tracking-tight font-medium">
              <span className="bg-black w-[6px] h-[6px] rounded-full"></span>
              Caracteristica 1
            </li>
          </ul>

          <div className="flex flex-col gap-3">
            <p>
              Color: Blue
            </p>
            <div className="flex gap-3">
              <button
                className={`w-8 h-8 rounded-full flex justify-center items-center ${true ? 'border border-slate-800' : 'bg-gray-300'}`}
                >
                <span className="w-[26px] h-[26px] rounded-full"
                style={{backgroundColor: 'blue'}}
                />
              </button>
            </div>

            {/*TODO: Opciones de almacenamiento, RAM, etc*/}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium">
                {/*En caso de ser un producto con opciones, como almacenamiento, RAM, etc*/}
                Almacenamiento disponible
              </p>

              <div className="flex gap-3">
                <select className="border border-gray-300 rounded-lg px-3 py-1">
                  <option value="">256 GB</option>
                </select>
            </div>
          </div>
          </div>

          {/*Comprar ahora*/}
          {
            false ? (
              <button className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] w-full"
              disabled
              >
                Agotado
              </button>
            ) : (
              <>
                {/*Contador de stock*/}
                <div className="space-y-3">
                  <p className="text-sm font-medium">
                    Stock disponible:
                  </p>

                  <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                    <button>
                      <LuMinus size={15} />
                    </button>
                    <span className="text-slate-500 text-sm">1</span>
                    <button>
                        <LuPlus size={15} />
                    </button>
                  </div>
                </div>

                {/*Botones de accion*/}
                <div className="flex flex-col gap-3">
                  <button className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2]">
                    Agregar al carrito
                  </button>
                  <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-gray-800">
                    Comprar ahora
                  </button>
                </div>
              </>
            )}

            <div className="flex pt-2">
              <div className="flex flex-col gap-1 flex-1 items-center">
                <CiDeliveryTruck size={30} />
                <p className="text-xs font-semibold">
                  Envio gratis
                </p>
              </div>

              <Link to ="#" className="flex flex-col gap-1 flex-1 items-center justify-center">
                <BsChatLeftText size={30} />
                <p className="flex flex-col items-center text-xs">
                  <span className="font-semibold">
                    Contact Us
                  </span>
                </p>
              </Link>
            </div>
        </div>
    </div>

    {/*Product Description, Reviews, etc*/}
    <ProductDescription />
    </>
  )
}
