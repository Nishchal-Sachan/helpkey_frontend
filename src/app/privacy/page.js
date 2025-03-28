"use client";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
    return (
        <>
            {/* Navbar with fixed height */}
            <div className="bg-custom-gradient h-[75px] pt-3">
                <Navbar />
            </div>

            {/* Privacy Policy Header */}
            <div className="container mx-auto px-6 lg:px-16 py-10">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center">Privacy Policy</h2>

                {/* Privacy Content */}
                <div className="text-gray-600 text-md leading-8 mt-10 max-w-4xl mx-auto text-justify">
                    <p className="mb-6">Here is the translation of the “Privacy Policy” description:</p>
                    
                    <ul className="space-y-6">
                        <li>
                            <span className="font-bold">1. Data Collection: </span>We will only collect essential information from users that is crucial for our services.
                        </li>
                        <li>
                            <span className="font-bold">2. Data Usage: </span>We will use users’ data strictly for the services and will never share it without their consent.
                        </li>
                        <li>
                            <span className="font-bold">3. Data Security: </span>We will take necessary steps to ensure the security and privacy of users’ data.
                        </li>
                        <li>
                            <span className="font-bold">4. Cookies: </span>We may use cookies for specific features of the website, but they will never contain personal information.
                        </li>
                        <li>
                            <span className="font-bold">5. Changes and Modifications: </span>We may make changes to the policies from time to time, and we will inform users about them.
                        </li>
                        <li>
                            <span className="font-bold">6. Contact: </span>For any questions or disputes, please feel free to contact us.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Contact & Footer */}
            <Contact />
            <Footer />
        </>
    );
}
