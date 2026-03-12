import { Separator } from "../shared/Separator"

const availableBrands = [
    'Apple', 
    'Samsung', 
    'Xiaomi', 
    'Huawei', 
    'OnePlus', 
    'Sony', 
    'LG', 
    'Motorola', 
    'Nokia', 
    'Asus']

export const ContainerFilter = () => {
  return (
    <div className="p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1">
        <h3 className="font-semibold text-xl mb-4">
            Filtros
        </h3>

        {/*Separador*/}
        <Separator />

        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-black">Marcas</h3>

            <div className="flex flex-col gap-2">
                {availableBrands.map(brand => (
                    <label key={brand} className="inline-flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500 accent-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700 cursor-pointer">{brand}</span>
                    </label>
                ))}
            </div>
        </div>
    </div>
  )
}
