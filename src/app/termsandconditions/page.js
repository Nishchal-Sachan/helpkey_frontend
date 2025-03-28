"use client";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {
    return (
        <>
            {/* Navbar */}
            <div className="bg-custom-gradient h-[75px] pt-3">
                <Navbar />
            </div>

            {/* Page Content */}
            <div className="container mx-auto px-6 md:px-16 py-10">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center">Terms and Conditions</h2>

                {/* Terms & Conditions Content */}
                <div className="text-gray-600 text-base md:text-lg leading-8 mt-10 max-w-4xl mx-auto text-justify">
                    <p className="font-bold mb-4">Description of terms and conditions for users is as follows:</p>

                    <ul className="space-y-6">
                        <li><span className="font-bold">1. User Responsibility: </span>The user is responsible for the security and privacy of their account.</li>
                        <li><span className="font-bold">2. Data Collection: </span>The company may collect user data according to its policies and privacy regulations.</li>
                        <li><span className="font-bold">3. User Agreement: </span>The user should stay informed about the company’s regular updates and new policies and agree to comply with them.</li>
                        <li><span className="font-bold">4. Disclaimer: </span>While using the services provided by the company, the user should exercise their own judgment and responsibility.</li>
                        <li><span className="font-bold">5. Performance and Limitations: </span>The company reserves the right to modify services or make changes without notice to the user.</li>
                        <li><span className="font-bold">6. Copyright and Property Rights: </span>All computer software, designs, logos, and related materials are the property of the company and their usage is subject to permission.</li>
                        <li><span className="font-bold">7. Dispute Resolution: </span>In case of any dispute, the user agrees to engage in discussions and agree to resolutions with the company.</li>
                        <li><span className="font-bold">8. Eligibility: </span>The user must be eligible to use the services and will not engage in any prohibited activities.</li>
                    </ul>
                </div>
            </div>

            {/* Contact & Footer */}
            <Contact />
            <Footer />
        </>
    );
}
