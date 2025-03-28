"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
    const [openDropdown, setOpenDropdown] = useState(null); // Keeps track of the open dropdown

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);// Toggle the menu open/close
    };
    return (
        <>
            <div className="flex lg:justify-evenly  justify-between items-center px-4 relative z-10">
                {/* Logo */}
                <img src="logo.png" alt="Logo" className="w-12 h-12" />

                {/* Navbar links for large screens */}
                <ul className="hidden md:flex space-x-10 text-xl text-white font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/aboutus">About Us</Link></li>
                    {/* Services Dropdown */}
                    <li className="relative">
                        <button
                            className="flex items-center space-x-1 text-white"
                            onClick={() => toggleDropdown("services")}
                        >
                            <span>Services</span>
                            <svg
                                className={`w-4 h-4 transform ${openDropdown === "services" ? "rotate-180" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {openDropdown === "services" && (
                            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-[200px]">
                                <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                    <Link href="/helpkeypoint">Helpkey Point</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                    <Link href="/helpkeyservices">Helpkey Services</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Features Dropdown */}
                    <li className="relative">
                        <button
                            className="flex items-center space-x-1 text-white"
                            onClick={() => toggleDropdown("features")}
                        >
                            <span>Features</span>
                            <svg
                                className={`w-4 h-4 transform ${openDropdown === "features" ? "rotate-180" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {openDropdown === "features" && (
                            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-[200px]">
                                <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                    <Link href="/shareandearns">Share & Earn</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                    <Link href="/helpandsupport">Help & Support</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                    <Link href="/helpkeyqr">Helpkey QR Code & Card</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/recruitment">Recruitment</Link></li>
                    <li><Link href="/contactus">Contact Us</Link></li>
                    <Link href="/admin" className="hover:underline">Admin</Link>
                    <li><Link href="https://play.google.com/store/apps/details?id=com.helpkey.services">Application Download</Link></li>
                </ul>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu (hidden by default, displayed when toggled) */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 absolute z-50 w-full bg-custom-gradient py-10`}>
                <ul className="space-y-3 text-white text-xl font-medium pl-5">
                    <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                    {/* Services Dropdown */}
                    <li className="relative">
                        <button
                            className="flex items-center justify-between w-full text-left"
                            onClick={() => toggleDropdown("services")}
                        >
                            <span>Services</span>
                            <svg
                                className={`w-4 h-4 transform ${openDropdown === "services" ? "rotate-180" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {openDropdown === "services" && (
                            <ul className="mt-2 text-white">
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/helpkeypoint" onClick={() => setIsMenuOpen(false)}>
                                        Helpkey Point
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/helpkeyservices" onClick={() => setIsMenuOpen(false)}>
                                        Helpkey Services
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Features Dropdown */}
                    <li className="relative">
                        <button
                            className="flex items-center justify-between w-full text-left"
                            onClick={() => toggleDropdown("features")}
                        >
                            <span>Features</span>
                            <svg
                                className={`w-4 h-4 transform ${openDropdown === "features" ? "rotate-180" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {openDropdown === "features" && (
                            <ul className="mt-2 text-white">
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/shareandearns" onClick={() => setIsMenuOpen(false)}>
                                        Share & Earn
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/helpandsupport" onClick={() => setIsMenuOpen(false)}>
                                        Help & Support
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/helpkeyqr" onClick={() => setIsMenuOpen(false)}>
                                        Helpkey QR Code & Card
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    
                    <li><Link href="/recruitment" onClick={() => setIsMenuOpen(false)}>Recruitment</Link></li>
                    <li><Link href="/contactus" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    <li><Link href="/admin" onClick={() => setIsMenuOpen(false)}>Admin</Link></li>
                    <li><Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" onClick={() => setIsMenuOpen(false)}>Application Download</Link></li>
                </ul>
            </div>
        </>
    );
}