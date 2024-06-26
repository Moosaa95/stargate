'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/button/Button"
import { useEffect, useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
  return (
    
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-gray-90 duration-300" : ""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                <Link href="/" className="text-3xl font-semibold flex items-center space-x-0">
                    <Image src="/assets/images/icon.jpg" alt="Logo Image" width={100} height={29} className="inline-bloock items-center "/>
                    <span className={`text-gray-90 font-freeman ${isSticky ? "text-white": ""}`}>Stargate Academy</span>
                </Link>
                <ul className="md:flex space-x-12 hidden">

                    {NAV_LINKS.map(({href, label, key}) => <Link   className={`text-[16px] text-gray-90 font-merriweather flex items-center cursor-pointer pb-1.5 pr-2 transition-all hover:font-bold ${isSticky ? "text-white": ""}`} href={href} key={key}>{label}</Link>)}

                </ul>
                <div className="md:hidden">
                    <button className="focus:outline-none focus:text-gray-90"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (<FaXmark className={`h-8 w-8 ${isSticky ? "text-white" : "text-gray-90"}`} />) : (<FaBars className={`h-8 w-8  ${isSticky ? "text-white" : "text-gray-90" }`} />)}
                    </button>
                </div>
            </div>
            {/* mobile menu items  */}
            <div className={`space-y-4 px-4 mt-24 py-7 transition-all duration-300 bg-gray-90 text-white ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
                {NAV_LINKS.map(({href, label, key}) => <Link  className="regular-16 text-white font-merriweather flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={href} key={key}>{label}</Link>)}
            </div>
        </nav>

    </header>
  )
}

export default Navbar



