"use client"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export default function ContactPage() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <h1 className="text-4xl text-center text-red-600 font-bold py-16">Contact Us</h1>
            <div className="bg-gray-200 min-h-screen flex items-center justify-center py-10">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="p-6 lg:ml-44 py-20">
                        <h2 className="text-sm font-bold text-gray-700 mb-4">Address</h2>
                        <div className="flex items-center mb-4">
                            <span className="text-red-600 text-xl mr-4">📱</span>
                            <p className="text-gray-700">+918062180646</p>
                        </div>
                        <div className="flex items-center mb-8">
                            <span className="text-red-600 text-xl mr-4">📧</span>
                            <p className="text-gray-700">support@helpkey.in</p>
                        </div>
                        <h2 className="text-sm font-bold text-gray-700 mb-4">Find Us</h2>
                        <p className="text-gray-700 mb-20">
                            64, Rajendranagar, Naubasta, Kanpur, Uttar Pradesh<br /> 208021
                        </p>
                        <h2 className="text-sm font-bold text-gray-700 mb-4">Follow Us</h2>
                        <div className="flex space-x-12">
                            <a href="https://www.facebook.com/helpkeyindia" className="text-gray-700 text-xl hover:text-red-600">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhelpkeyindia" className="text-gray-700 text-xl hover:text-red-600">
                                <FaTwitter />
                            </a>
                            <a href="https://www.youtube.com/@helpkey" className="text-gray-700 text-xl hover:text-red-600">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/helpkey.in/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="text-gray-700 text-xl hover:text-red-600">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md h-[525px] lg:w-[495px]">
                        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
                        <form className="px-3">
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2">Name</label> */}
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 border border-gray-300 placeholder-gray-500 rounded-[2px] focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2">Contact No</label> */}
                                <input
                                    type="text"
                                    placeholder="Contact No."
                                    className="w-full p-2 border border-gray-300 placeholder-gray-500 rounded-[2px] focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2">Email</label> */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 placeholder-gray-500 rounded-[2px] focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2">Subject</label> */}
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-2 border border-gray-300 placeholder-gray-500 rounded-[2px] focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2">Message</label> */}
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-2 border border-gray-300 placeholder-gray-500 rounded-[2px] focus:outline-none"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="text-sm bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>

    );
}
