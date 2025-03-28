"use client"

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function helpkeyservices() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="container mx-auto">
                {/* About Service Section */}
                <section className="bg-gray-100 pb-10 mt-10 lg:px-0 px-3">
                    <div className="text-center lg:mx-20 xl:mx-56">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl py-6 text-red-600 font-bold">
                            About Service
                        </h1>
                        <p className="text-justify sm:text-center text-black text-base sm:text-lg leading-7">
                            The company recruits socially responsible individuals with good behavior and provides them with opportunities to serve as security guards, guards, and car drivers at affordable rates as per the needs of the people. This initiative helps in keeping people safe and providing assistance for their health and security needs. It is a positive endeavor towards the development and self-reliance of society, extending services to those in need.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section>
                    <div className="px-4 sm:px-6 lg:px-20 xl:px-56 text-justify">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
                            {/* Security Guard */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/securityguard.jpeg"
                                    alt="Security Guard"
                                    className="h-[175px] w-full object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Security Guard
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        The company’s initiative to recruit security personnel and appoint them as security guards with good care, providing them with proper training, and offering their services at various places like companies, homes, hospitals, etc., at a lower cost is a highly beneficial step. It helps ensure the safety of people and allows them to benefit from better security services. This initiative contributes to making society safer and encourages opportunities in the security sector. It leads to the development of security measures and promotes a more self-reliant and secure community.
                                    </p>
                                </div>
                            </div>

                            {/* Car Driver */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/cardriver.png"
                                    alt="Car Driver"
                                    className="h-[175px] w-full object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Car Driver
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        The company helps people by providing experienced and skilled drivers at affordable rates to operate their vehicles. This enables individuals to access safe and reliable transportation services that cater to their commuting needs. The availability of experienced drivers ensures the safety of passengers and enhances their travel experience. Through this initiative, the company contributes to fostering entrepreneurship in society and creating employment opportunities. It is a positive step towards the development and self-reliance of the community.
                                    </p>
                                </div>
                            </div>

                            {/* Guard */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/guard.jpg"
                                    alt="Guard"
                                    className="h-[175px] w-full object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Guard
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        The company recruits physically and mentally strong individuals and sends them as guards to provide assistance and security to people at an affordable cost. This initiative helps in keeping people safe and provides support to their health and safety needs. Through this approach, the company contributes to fostering entrepreneurship in society and creates employment opportunities. It is a positive endeavor towards the development and self-reliance of the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact & Footer */}
                <Contact />
                <Footer />
            </div>
        </>
    );
}
