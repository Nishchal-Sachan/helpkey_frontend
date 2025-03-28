import Link from "next/link";

export default function Contact() {
    return (
      <section className="container mx-auto px-6 md:px-12 lg:px-20 lg:ml-3 py-10 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Quick Links */}
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-red-600 space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/helpkeyqr">Help Key Card</Link></li>
              <li><Link href="/helpkeypoint">Helpkey Point</Link></li>
              <li><Link href="/helpkeyservices">Helpkey Services</Link></li>
              <li><Link href="/contactus">Contact Us</Link></li>
            </ul>
          </div>
  
          {/* Important Links */}
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Important Links</h2>
            <ul className="text-red-600 space-y-2">
              <li><Link href="/refunds">Refunds/Cancellations</Link></li>
              <li><Link href="/termsandconditions">Terms and Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
  
          {/* Get In Touch */}
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <ul className="text-red-600 space-y-2">
              <li>📞 Phone: +91 8062180646</li>
              <li>📧 Email: support@helpkey.in</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  