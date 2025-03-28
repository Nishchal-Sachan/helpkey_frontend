"use client"

import Image from 'next/image';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default function ShareEarn() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-red-600 text-3xl font-bold my-3">Share & Earns</h2>
            </div>

            <div className="bg-gray-200 py-10">
                {/* top Section */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2">
                    <div className='animate-slideLeft'>
                        <Link href="https://swasoftech.com/" target="_blank">
                            <Image src="/shareandearn.png" alt="Referral Interface" width={600} height={400} className="mx-auto" />
                        </Link>
                    </div>
                    <div className='animate-slideRight'>
                        <h3 className="text-red-600 font-bold mx-7 my-14 pr-3 text-3xl">After Updating Profile You Get Your Referral Code</h3>
                        <p className="text m-6 text-md mx-7 pr-7 text-justify leading-7">
                            After signing up in the “Helpkey” app, when you access your app interface, you’ll see a three-dot button at the top-left corner of the interface. Clicking on it takes you to your dashboard, where you can update your profile.
                            <br /><br />
                            After updating your profile, you’ll have the option to share and earn, upon clicking which your referral code is displayed. By sharing this code, you provide others with the opportunity to join you.
                        </p>
                    </div>
                </div>

                {/* bottom Section */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2">

                    <div className='animate-slideRight'>
                        <h3 className="text-red-600 font-bold mx-7 my-14 pr-3 text-3xl">After Share Your Referral Code, Your Helpkey Wallet Gets ₹10/Card</h3>
                        <p className="text m-6 text-md mx-7 pr-7 text-justify leading-7">
                            After receiving your referral code, you are presented with a dedicated interface where you can see the available apps through which you can share your referral code. You can choose those apps and, upon selection, there is an option to share your code, enabling you to provide others with the opportunity to join you.
                            <br /><br />
                            When you share your referral code with your friends and they install the application using your referral, and after they install it, if they update their profile and then proceed to order a virtual card by clicking on the virtual card option in their dashboard and submitting their ID proof, you receive a reward of ₹10 in your wallet as part of the referral process.
                        </p>
                        <button className="bg-red-600 text-white px-6 py-2 mt-4 ml-7 rounded">Download App Now</button>
                    </div>
                    <div className='animate-slideLeft'>
                        <Link href="https://swasoftech.com/" target="_blank">
                            <Image src="/shareandearn2.png" alt="Reward Card" width={600} height={400} className="mx-auto mt-4" />
                        </Link>

                    </div>
                </div>
            </div>

            {/* Wallet Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 mt-12">
                <div >
                    <Image src="/shareandearn3.png" alt="Wallet Withdrawal" width={600} height={400} />
                </div>
                <div >
                    <h3 className="text-red-600 font-bold text-xl mb-5">Wallet details</h3>
                    <h4 className="text-red-600 font-semibold mt-2 text-lg mb-5">Wallet transactions</h4>
                    <p className="mt-2 text-md mb-10 leading-7 text-justify">
                        The money earned through the referral code is deposited into your Helpkey wallet, and you can see a sequential breakdown of these earnings. Additionally, details about the amount being withdrawn from this wallet are also displayed, providing you with a comprehensive overview of your financial transactions.
                    </p>
                    <h4 className="text-red-600 font-semibold mt-4 text-lg mb-5">Withdrawal History</h4>
                    <p className="mt-2 text-md leading-7 text-justify">
                        When you fill in the bank or UPI details to withdraw money from your Helpkey wallet, the company sends the money to your account. You can view these sent funds in the “withdraw history,” allowing you to know when the company has transferred your money to your account.
                    </p>
                </div>
            </div>
            <Contact />
            <Footer />
        </>

    );
}
