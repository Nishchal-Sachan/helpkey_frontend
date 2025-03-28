
export default function DownloadSection() {
    return (
        <div className="container mx-auto bg-gray-50 py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex justify-center lg:ml-52">
                    <img src="mobile.png" className="w-full max-w-[500px]" alt="Mobile" />
                </div>
                <div className="text-center lg:text-left">
                    <div className="mb-5">
                        <img src="app.png" className="w-full max-w-[500px]" alt="App" />
                    </div>
                    <div className="mb-5 flex justify-center lg:justify-start">
                        <img src="/andapp.webp" className="w-full max-w-[300px]" alt="App Store" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img src="scanner.png" className="w-[150px]" alt="Scanner QR Code" />
                        <p className="text-black">
                            Scan the QR Code to download the App
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
