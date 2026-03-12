import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"

export const navbarLinks = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Products",
        href: "/products"
    },
    {
        id: 3,
        title: "About",
        href: "/about"
    }
]

export const socialLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "#",
        icon: <FaFacebook size={20} />
    },
    {
        id: 2,
        title: "Twitter",
        href: "#",
        icon: <FaXTwitter size={20} />
    },
    {
        id: 3,
        title: "Instagram",
        href: "#",
        icon: <FaInstagram size={20} />
    }
]