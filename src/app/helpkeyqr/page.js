"use client"

import Image from 'next/image';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function helpkeyqr() {
    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-red-600 text-4xl font-bold my-3">Helpkey QR Code</h2>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-9">
                <div className='animate-slideLeft'>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/qrcode.jpg" alt="Referral Interface" width={550} height={350} className="mx-auto" />
                    </Link>
                </div>
                <div className='animate-slideRight lg:mx-0 mx-5 lg:mt-0 mt-3'>
                    <h3 className="font-bold pr-3 text-4xl">How To Use QR Code?</h3>
                    <p className="text-gray-500 mt-6 text-md lg:pr-7 text-justify leading-7">
                        When you sign in and log in to the Helpkey App, your profile gets updated, and you receive a special Helpkey QR code. When a bill is made using Helpkey points, which is associated with the Helpkey company, you receive half the discount provided on that Helpkey user’s points.
                        <br /><br />
                        This means you benefit from half of the discount displayed by the user.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-red-600 text-4xl font-bold my-3">Helpkey Virtual Card</h2>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-9">
                <div className='animate-slideLeft'>
                    <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                        <Image src="/virtualcard.jpg" alt="Referral Interface" width={550} height={350} className="mx-auto" />
                    </Link>
                </div>
                <div className='animate-slideRight lg:mx-0 mx-5 lg:mt-0 mt-3'>
                    <h3 className="font-bold pr-3 text-4xl">How To Use Virtual Card?</h3>
                    <p className="text-gray-500 mt-6 text-md lg:pr-7 text-justify leading-7">
                        When you download the Helpkey application and update your profile, you are provided with an option for a virtual card on your dashboard. After clicking on this option, you can upload necessary documents, make payment for the card fee, and place an order for your virtual card. This card gets approved after a while, and then you receive a virtual card with a QR code.
                        <br /><br />
                        The card is sent to your address through mail, and you can use it to avail the full benefit of the discounts displayed on bills made using Helpkey points. So now you can order your Helpkey card through the Helpkey application.
                    </p>
                </div>
            </div>
            <div className='text-center'>
                <h3 className="text-red-600 font-bold my-10 text-4xl">Benefits of Helpkey Card & Virtual Card</h3>
                <p className="text-gray-500 mt-6 lg:mx-48 mx-5 text-md text-justify leading-7">
                    By using QR codes and Helpkey cards, you can save significant amounts of money. For instance, when you make any type of bill payment using Helpkey points, you receive a discount of at least 20 to 25% through the card. Download the Helpkey app today, update your profile, upload necessary documents and QR code, and obtain your Helpkey card.
                    <br /><br />
                    This allows you to simplify your daily life by taking advantage of the services offered by Helpkey company.
                </p>
            </div>
            <div className='my-10'>
                <Link href="https://play.google.com/store/apps/details?id=com.helpkey.services" target="_blank">
                    <Image src="/keyappdown.jpg" alt="Referral Interface" width={550} height={350} className="mx-auto" />
                </Link>
            </div>
            <Contact />
            <Footer />
        </>
    );
}
