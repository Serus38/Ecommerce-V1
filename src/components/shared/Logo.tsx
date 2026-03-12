import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to="/" className={"text-2xl font-bold tracking-tighter transition-all"}>
        E-Shop
        <p className="hidden lg:block">
            Your one-stop shop for everything!
            <span className="text-cyan-600">V1</span>
        </p>

        <p className="flex text-4x1 lg:hidden">
            <span className="-skew-x-6">S</span>
            <span className="text-cyan-600 skew-x-6">H</span>  
            <span className="-skew-x-6">O</span>
            <span className="text-cyan-600 skew-x-6">P</span>
        </p>
    </Link>
  )
}
 