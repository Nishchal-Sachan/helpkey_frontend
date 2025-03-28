export default function ServicesSection() {
    return (
        <div
            className="container mx-auto bg-cover bg-center py-20"
            style={{ backgroundImage: "url('keypoint.jpg')" }}
        >
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What We Can Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-full lg:h-full h-[1100px]">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="keypoint.jpg"
                            alt="Helpkey Point"
                            className="w-full h-64 sm:h-48 md:h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">Helpkey Point</h3>
                            <p className="text-gray-600 mb-6">
                                HelpKey Point is a place where special discounts are provided
                                to the users of the company and card holders of the company.
                            </p>
                            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                                Know More
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="keyservices.png"
                            alt="Helpkey Services"
                            className="w-full h-64 sm:h-48 md:h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">Helpkey Services</h3>
                            <p className="text-gray-600 mb-6">
                                All the services provided through HelpKey are resolved very
                                quickly and delivered to the users in a very less amount of
                                money thereby saving the people both time and money.
                            </p>
                            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
