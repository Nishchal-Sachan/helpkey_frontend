"use client";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Refunds() {
    return (
        <>
            {/* Navbar with fixed height */}
            <div className="bg-custom-gradient h-[75px] pt-3">
                <Navbar />
            </div>

            {/* Refund Policy Header */}
            <div className="container mx-auto px-6 md:px-16 py-10">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center">Refunds & Cancellations</h2>

                {/* Refund Policy Content */}
                <div className="text-gray-600 text-sm md:text-lg leading-8 mt-10 max-w-4xl mx-auto text-justify">
                    <p className="mb-4">Here is the translation of the refund policy into English:</p>
                    <p className="mb-6">The description of the refund policy is as follows:</p>

                    <ul className="space-y-6">
                        <li>
                            <span className="font-bold">1. Refund Eligibility: </span>Refund eligibility will be determined according to the specific financial or service structure of the company as per the defined terms and conditions.
                        </li>
                        <li>
                            <span className="font-bold">2. Refund Request: </span>The user needs to submit a refund request, including relevant details and reasons for the refund.
                        </li>
                        <li>
                            <span className="font-bold">3. Process: </span>The refund request will be considered based on priority and the terms and conditions, and the user will be notified within a specified time.
                        </li>
                        <li>
                            <span className="font-bold">4. Dispute: </span>In case of a dispute regarding the refund policy, the user agrees to engage in discussions and agree to resolutions with the company.
                        </li>
                        <li>
                            <span className="font-bold">5. Rules and Changes: </span>The company reserves the right to modify the policy and make changes at any time, notifying the users.
                        </li>
                        <li>
                            <span className="font-bold">6. Contact: </span>For any questions or issues related to a refund, the user is permitted to contact the company.
                        </li>
                    </ul>

                    <p className="mt-6 font-semibold">After the refund process begins, the refund amount will be sent to the users’ bank accounts within 3-5 days.</p>
                </div>
            </div>

            {/* Contact & Footer */}
            <Contact />
            <Footer />
        </>
    );
}
