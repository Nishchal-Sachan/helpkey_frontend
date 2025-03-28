"use client"

import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HelpandSupport() {

    const services = [
        {
            title: "New Service request",
            description:
                "This means that when users send a request for a new service feature, the request is displayed in the vendors’ new service request section, allowing vendors to view it and take appropriate action.This serves as a communication system through which the company and vendors can clarify the priorities and requirements for the new service.",
        },
        {
            title: "Complete services",
            description:
                "The service request sent by users is marked as “complete” once vendors successfully fulfill it. When vendors successfully complete the service, this process signifies the conclusion of the service and encompasses the categories or situations within the scope of the provided service.",
        },
        {
            title: "Uncomplete services",
            description:
                "In an incomplete service, the vendor is required to fulfill the user’s service request and complete all necessary tasks of the service, ensuring the user’s satisfaction by addressing their needs thoroughly. This allows the service to be concluded, and it can then be utilized fully and in a normal manner.",
        },
        {
            title: "Cancel service request",
            description:
                "In the services sent by users, those that have been canceled by vendors are displayed in “Cancelled Services.” This can happen due to human or necessity-related reasons, or other constraints, resulting in the service not being fulfilled by the vendor.",
        },
    ];

    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Left Section - Text Content */}
                    <div>
                        <h1 className="text-4xl font-bold text-red-600">How to Login</h1>
                        <h2 className="text-2xl font-semibold mt-6">Select User Type</h2>

                        {/* User & Vendor Details */}
                        <div className=" gap-6 mt-6">
                            <div>
                                <h3 className="text-xl font-bold">User</h3>
                                <p className="text-gray-700 mt-2 leading-7 text-justify">
                                    Users who utilize the company’s application and its services are individuals who make use of the application and services provided by the company. These users benefit from the company’s products, services, information, or assistance, which they obtain through the application. Their usage can serve various purposes, such as making purchases of services, acquiring information, managing business processes, and more.
                                </p>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-xl font-bold">Vendor</h3>
                                <p className="text-gray-700 mt-2 leading-7 text-justify">
                                    In the company’s app, a vendor is a business individual who associates their business with the company and showcases their services and products. They can display their business information, product descriptions, pricing, availability, and contact details within the company’s essential structures, enabling customers to establish commercial communication with them. A vendor is a user within the company’s app whose objective is to attract more customers to their business through the promotion and display of their services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="relative">
                        <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                            <Image
                                src="/help.png"
                                alt="Login Guide"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center text-red-600 text-4xl mb-7 font-bold">
                <h2>User SignUp and Login</h2>
            </div>

            {/*signup user*/}
            <div className="w-full mx-auto grid md:grid-cols-2">
                <div className="lg:ml-48 ml-6" >
                    <h3 className="text-red-600 font-bold mt-14 mb-8 pr-3 text-4xl">
                        SignUp User</h3>
                    <p className="text-md pr-7 text-justify leading-7">
                        To sign up in the application, users need to install the Helpkey app from the Play Store. After installation, upon opening the app, they will find an option to explore various types of users. Once they select a user type, a new interface appears.
                        <br /><br />
                        In this interface, there is a login page with a “Create Account” option indicated below. Clicking on this option allows users to enter their name, mobile number, email ID, password, and referral code to complete the sign-up process.ward of ₹10 in your wallet as part of the referral process.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-2 mt-10 rounded">Sign Up</button>
                </div>
                <div>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/support.png" alt="Reward Card" width={600} height={400} className="mt-4" />
                    </Link>

                </div>
            </div>

            {/*login user*/}
            <div className="w-full mx-auto grid md:grid-cols-2 my-10">
                <div className="lg:ml-48 ml-6" >
                    <h3 className="text-red-600 font-bold mt-14 mb-8 pr-3 text-4xl">
                        Login User</h3>
                    <p className="text-md pr-7 text-justify leading-7">
                        To log in to the application, users will enter the same mobile number or email ID and password that they provided during sign-up. After entering their credentials, they will click on the “Login” button on the login page, allowing them to successfully log in to the application.
                        <br /><br />
                        Once logged in, they will be presented with an interface displaying two types of services offered by the company – “Helpkey Point” and “Helpkey Service.” Users can choose the services according to their preference and benefit from using them.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-2 mt-10 rounded">Login</button>
                </div>
                <div>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/login.jpg" alt="Reward Card" width={600} height={400} className="mt-4" />
                    </Link>

                </div>
            </div>

            <div className="text-center text-red-600 text-4xl mb-7 font-bold">
                <h2>Vendor SignUp and Login</h2>
            </div>

            {/*signup vendor*/}
            <div className="w-full mx-auto grid md:grid-cols-2">
                <div className="lg:ml-48 ml-6" >
                    <h3 className="text-red-600 font-bold mt-14 mb-8 pr-3 text-4xl">
                        SignUp Vendor</h3>
                    <p className="text-md pr-7 text-justify leading-7">
                        For vendors to sign up on the application, they need to install the Helpkey app through the Play Store. After installation, they can open the app and find the option to explore different types of users.
                        <br /><br />
                        Once they select “Vendor,” a new interface appears with a login page. Below the login section, they have the option to “Create Account.” Clicking on that option leads them to a page where they can enter their name, mobile number, email ID, password, and referral code to complete the sign-up process.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-2 mt-10 rounded">Sign Up</button>
                </div>
                <div>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/support.png" alt="Reward Card" width={600} height={400} className="mt-4" />
                    </Link>

                </div>
            </div>

            {/*login vendor*/}
            <div className="w-full mx-auto grid md:grid-cols-2 my-10">
                <div className="lg:ml-48 ml-6" >
                    <h3 className="text-red-600 font-bold mt-14 mb-8 pr-3 text-4xl">
                        Login Vendor</h3>
                    <p className="text-md pr-7 text-justify leading-7">
                        To log in to the application, vendors can use the same mobile number or email ID and password that they used during sign-up. After logging in, they will be presented with a new interface, which includes a 3-dot button in the upper left corner. By clicking on it, vendors can update their profile and input details about their business and services using their business points.
                        <br /><br />
                        They will need to provide all the necessary information, including bank account details for their business points, so that the company can send them payments. After submitting their details, vendors can successfully link their business to the company and complete the login process.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-2 mt-10 rounded">Login</button>
                </div>
                <div>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/login.jpg" alt="Reward Card" width={600} height={400} className="mt-4" />
                    </Link>

                </div>
            </div>

            {/*Vendor dashboard*/}
            <div className="bg-gray-100 py-12 px-6">
                {/* Section Heading */}
                <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
                    Vendor Dashboard
                </h1>

                {/* Service Cards */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-odd rounded-2xl p-6 text-center  transition duration-300"
                        >
                            <img
                                src="/icon.jpeg"
                                alt="Service Icon"
                                className="w-12 mx-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-red-600 ">{service.title}</h2>
                            <p className="text-gray-700 mt-3 leading-6  text-justify">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*contact section*/}
            <div className="bg-gray-100 pb-10 px-6 md:px-10 ">
                <div className="max-w-4xl lg:ml-24 ml-2">
                    <h2 className="text-red-600 text-3xl font-bold mb-6">Contact Us for Helpkey</h2>
                    <div className="justify-center items-center md:items-start">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <span className="text-red-600 text-2xl">📞</span>
                            <p className="text-lg font-semibold">+91 8062180646</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 my-6">
                            <span className="text-red-600 text-2xl">📧</span>
                            <p className="text-lg font-semibold">support@helpkey.in</p>
                        </div>

                        {/* Address */}
                        <div className="flex items-center lg:gap-4 gap-2">
                            <span className="text-red-600 text-2xl">📍</span>
                            <p className="text-lg font-semibold text-center md:text-left">
                                64, Rajendranagar, Naubasta, Kanpur, Uttar Pradesh 208021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
}
