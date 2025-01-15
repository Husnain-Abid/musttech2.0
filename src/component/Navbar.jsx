import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    return (

        <nav className=" sticky top-0 z-50 bg-[#0F0F0F]/40  backdrop-blur-[18px]   px-16 h-[100px] flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center text-2xl font-bold">
                <img
                    src="/images/logo.svg" // Path to your image in the "public" folder
                    alt="Company Logo"      // Alt text for accessibility
                    width={235}              // Set desired width
                    height={52}             // Set desired height
                    priority                // Optional: Preload the image
                />
            </Link>

            {/* Navigation Links */}
            <div className="hidden items-center gap-8 font-bold text-base md:flex">
                {/* Services Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center gap-1 text-white hover:text-gray-300"
                    >
                        Services
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                        <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
                            <Link
                                to="/services/web-development"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Web Development
                            </Link>
                            <Link
                                to="/services/mobile-app"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Mobile App
                            </Link>
                            <Link
                                to="/services/branding"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Branding
                            </Link>
                            <Link
                                to="/services/digital-marketing"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Digital Marketing
                            </Link>
                            <Link
                                to="/services/seo"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                SEO
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/careers" className="text-white hover:text-gray-300">
                    Careers
                </Link>
                <Link to="/portfolio" className="text-white hover:text-gray-300">
                    Portfolio
                </Link>
                <Link to="/about" className="text-white hover:text-gray-300">
                    About us
                </Link>

                {/* Contact Button */}
                <Link
                    to="/contact"
                    className="rounded-full border border-red-500 ml-1.5 px-6 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                >
                    CONTACT
                </Link>


            </div>



            {/* Mobile Menu Button */}
            <button className="text-white md:hidden">
                <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </nav>

    


    )
}

