"use client"

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function helpkeypoint() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="container mx-auto">
                {/* Hero Section */}
                <section className="bg-gray-100 pb-10 mt-10 lg:px-0 px-3">
                    <div className="text-center lg:mx-20 xl:mx-56">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl py-6 text-red-600 font-bold">
                            About Point
                        </h1>
                        <p className="text-justify sm:text-center text-black text-base sm:text-lg leading-7">
                            The company’s initiative to provide a 20% to 30% discount through the HelpKey Card on bills at good hospitals, hotels, and restaurants in various cities of the country is a highly beneficial step. It allows people to access high-quality services and amenities within their budget, enhancing their overall experience. This initiative provides people with more options for hospitals, hotels, and restaurants while also promoting growth in these industries. It is a positive move for society, connecting people with convenient and accessible services.
                        </p>
                    </div>
                </section>

                {/* Key Points Section */}
                <section>
                    <div className="px-4 sm:px-6 lg:px-20 xl:px-56 text-justify">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
                            {/* Hospitals */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/hospital.jpeg"
                                    className="h-[175px] w-full object-cover"
                                    alt="Hospital"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Hospitals
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        The company has taken an initiative to bring down the cost of treatment through HelpKey Card by connecting the best hospitals in the city. This allows people to avoid the high expenses of premium hospitals and get affordable medical care. The initiative facilitates convenient access to healthcare services in society, thereby benefiting individuals from better medical treatment. It reflects the commitment to enhance the capabilities of the society, contributing to the development of a healthier and more empowered community.
                                    </p>
                                </div>
                            </div>

                            {/* Hotels */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/hotel.jpeg"
                                    className="h-[175px] w-full object-cover"
                                    alt="Hotel"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Hotels
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        The company’s initiative to connect with good hotels in the city and provide discounts through the HelpKey Card is a commendable step. This service allows people to avail upfront discounts at high-quality hotels, reducing their travel and accommodation expenses. It helps individuals enjoy their journeys and leisure trips with ease. This initiative enhances the convenience for city tourists and promotes development in the tourism sector.
                                    </p>
                                </div>
                            </div>

                            {/* Restaurants */}
                            <div className="shadow-odd rounded-lg overflow-hidden">
                                <img
                                    src="/restaurant.jpeg"
                                    className="h-[175px] w-full object-cover"
                                    alt="Restaurant"
                                />
                                <div className="p-4">
                                    <h1 className="text-center text-xl sm:text-2xl py-2 text-red-500 font-bold">
                                        Restaurants
                                    </h1>
                                    <p className="text-gray-500 leading-7">
                                        Connecting with good restaurants in the city and providing discounts through the HelpKey Card is a very useful initiative by the company. This service allows people to enjoy high-quality dining at lower costs, making dining out more affordable for them. It enhances the dining experience and promotes the restaurant industry by providing more opportunities for people to explore and enjoy dining options in the city. Overall, this initiative contributes positively to the culinary scene and benefits both the public and the restaurant industry.
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
