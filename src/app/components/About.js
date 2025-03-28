
export default function About() {
    return (
        <>
            <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:items-center lg:px-24">
                <img
                    src="whoweare.png"
                    className="mx-auto mb-10 lg:mb-0 lg:ml-16 px-10 py-20 w-full sm:w-3/4 md:w-4/5"
                    alt="Who We Are"
                />
                <div className="text-left lg:mr-16">
                    <h2 className="font-medium text-4xl sm:text-5xl font-serif text-red-600 mb-6 text-center lg:text-left">
                        Who We Are
                    </h2>
                    <p className="text-slate-700 text-xl sm:text-2xl text-justify font-bold mb-6">
                        The main goal of the company is to save people’s money and provide good services to people in less money.
                    </p>
                    <p className="mt-4 text-justify text-base sm:text-lg leading-6">
                        Through the company, you can save money in your daily life. To take advantage of the company, it is mandatory to have the company’s QR code or the company’s virtual card. If you have the QR code, then the discount is visible in the application. You will get half the benefit and if you have a virtual card, you will get the full benefit of the discount shown in the application. To get the QR code you will get the QR code on updating your profile after downloading the application and to get the virtual card you have to accept all the terms and conditions of the company and place the virtual card order which you can easily do from the application. Can. Helpkey company’s services are provided at a very good price and in less money. By joining Helpkey, you can get good savings in your life.
                    </p>
                </div>
            </div>

        </>
    );
}
