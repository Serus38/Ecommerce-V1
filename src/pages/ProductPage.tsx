import { Separator } from "../components/shared/Separator"
import { formatPrice } from "../helpers"

export const ProductPage = () => {
  return (
    <>
    <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
      {/*TODO: Product Image*/}
      <div>
        Image Galery
      </div>

      <div className="flex-1 space-y-5">
        <h1 className="text-3x1-font-bold tracking-tight">
          Product Name
        </h1>

        <div className="felx gap-5 items-center">
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

        
      </div>



    </div>
    </>
  )
}
