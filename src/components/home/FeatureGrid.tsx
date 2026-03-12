import { BiWorld } from "react-icons/bi"
import { FaHammer } from "react-icons/fa6"
import { HiMiniReceiptRefund } from "react-icons/hi2"
import { MdLocalShipping } from "react-icons/md"

export const FeatureGrid = () => {
  return (
    <div className="container z-10 relative p-10 md:p-10 grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
        <div className="flex items-center gap-6">
            <MdLocalShipping size={40} className="text-slate-600" />

            <div className="space-y-1">
                <p className="font-semibold">
                    Entrega Rápida
                </p>
                <p className="text-sm">
                    Recibe tus productos en tiempo récord.
                </p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <HiMiniReceiptRefund size={40} className="text-slate-600" />

            <div className="space-y-1">
                <p className="font-semibold">
                    Devoluciones sin Problemas
                </p>
                <p className="text-sm">
                    Cambia o devuelve productos fácilmente.
                </p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <FaHammer size={40} className="text-slate-600" />

            <div className="space-y-1">
                <p className="font-semibold">
                    Soporte 24/7
                </p>
                <p className="text-sm">
                    Estamos aquí para ayudarte en cualquier momento.
                </p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <BiWorld size={40} className="text-slate-600" />

            <div className="space-y-1">
                <p className="font-semibold">
                    Garantia
                </p>
                <p className="text-sm">
                    Productos de calidad con garantía de satisfacción.
                </p>
            </div>
        </div>
    </div>
  )
}
