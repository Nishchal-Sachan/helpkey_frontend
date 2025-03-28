"use client"

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function aboutus() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[70px] h-[70px] pt-3'>
                <Navbar />
            </div>
            <section>
                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center py-10 lg:py-16 text-red-600 font-bold">
                    About Us
                </h1>

                {/* About Us Section */}
                <div className="container mx-auto px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:px-16 xl:px-28 bg-gray-200 py-16">
                    <img
                        src="aboutus.jpg"
                        className="mx-auto mb-10 lg:mb-0 w-full sm:w-3/4 md:w-4/5 lg:h-[650px]"
                        alt="About Us"
                    />
                    <div className="text-left px-2 lg:px-8">
                        <h2 className="font-bold text-2xl sm:text-2xl lg:text-3xl font-sans text-red-600 mb-6 text-left lg:text-left">
                            Certainly, here's a detailed overview of HelpKey India Private Limited:
                        </h2>
                        <p className="text-slate-800 text-lg sm:text-xl font-bold mb-2">Introduction:</p>
                        <p className="text-slate-500 text-base sm:text-lg leading-6 mb-6 text-justify">
                            HelpKey India Private Limited is a service-based company that was established in November 2021. It operates with a primary focus on providing affordable manpower services and facilitating cost savings for its customers through the use of Helpkey cards. The company’s headquarters are situated in Rajendra Nagar, Naubasta, Kanpur, Uttar Pradesh, India.
                        </p>
                        <p className="text-slate-800 text-lg sm:text-xl font-bold mb-2">Objectives:</p>
                        <p className="text-slate-500 text-base sm:text-lg leading-6 text-justify">
                            The core objectives of Help Key India Private Limited encompass two main aspects. Firstly, it aims to offer essential services to individuals at reduced costs, thereby enhancing accessibility and affordability. Secondly, the company seeks to foster business partnerships through the provision of discounts via Helpkey cards, thereby benefiting both consumers and establishments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-10 bg-gray-100 container mx-auto ">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-28">
                    <h2 className="py-6 text-lg sm:text-xl font-bold">*Help Key Services:*</h2>
                    <ul className="list-decimal pl-4 text-gray-500 text-justify">
                        <li className="py-4">
                            <span className="font-bold">Helpkey Point:</span> This service is designed to cater to commercial needs. It allows individuals to avail themselves of various services by visiting Helpkey points. This includes discounts on bills in establishments such as hospitals, hotels, and restaurants, contributing to significant cost savings.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Helpkey Service:</span> Help Key India Private Limited extends its services to the convenience of customers’ homes. Through Helpkey Service, the company provides doorstep services, ensuring that individuals can access the required services from the comfort of their residences.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Expertise:</span> Help Key India Private Limited specializes in facilitating discounts on bills incurred at hospitals, hotels, and restaurants. The company’s proficiency lies in securing substantial savings for its customers in these sectors. Additionally, the company prides itself on delivering quality manpower services at economical rates.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Supply Chain:</span> The company’s Helpkey cards serve as a tool for enabling discounts on bills at Helpkey points. Moreover, Help Key India Private Limited’s manpower services contribute to efficient task management and cost-effective solutions for various professional needs.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Ethics and Values:</span> Help Key India Private Limited places a high value on customer satisfaction and financial prudence. It offers a 100% refund facility for services that are returned, showcasing its commitment to ensuring customer contentment. The company also provides round-the-clock contact support, reinforcing its dedication to aiding customers promptly.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Historical Background:</span> Operating since 2021, Help Key India Private Limited has been consistently contributing to financial savings for its customers. By offering discounts and valuable services, the company has established itself as a reliable partner in enhancing economic prudence.
                        </li>
                        <li className="py-4">
                            <span className="font-bold">Future Endeavors:</span> Looking ahead, Help Key India Private Limited envisions expanding its assistance to customers by providing increased financial support. The company’s future plans also involve guiding individuals towards optimizing their financial resources through its comprehensive services.
                        </li>
                    </ul>
                    <p className="py-6 text-gray-500 text-justify">
                        In conclusion, Help Key India Private Limited is a forward-thinking company that emphasizes affordability, convenience, and value in its services. Through its innovative approach and commitment to customer welfare, the company has emerged as a significant player in enhancing financial well-being and accessibility for individuals and businesses alike.
                    </p>
                    <Contact />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
