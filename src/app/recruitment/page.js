"use client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const recruitment = () => {
    const [formData, setFormData] = useState({
        jobType: "",
        name: "",
        fatherName: "",
        dateOfBirth: "",
        mobileNumber: "",
        email: "",
        address: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileUpload = (e) => {
        setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className='bg-custom-gradient lg:h-[75px] h-[75px] pt-3'>
                <Navbar />
            </div>
            <div className="container mx-auto">
                {/* Header Image */}
                <img
                    src="/recruitment.png"
                    className="pt-4 mx-auto max-w-full h-auto lg:px-0 px-5"
                    alt="Recruitment Banner"
                />
                <div className="flex flex-col items-center lg:mx-40 mt-5 ">
                    <h1 className="text-xl sm:text-3xl font-bold mb-6 border-2 py-8 shadow-even lg:w-full text-center w-[320px] ">
                        Apply For Job
                    </h1>
                    <form
                        className="w-full bg-white shadow-lg rounded-lg px-4 sm:px-6 py-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            {/* Job Type */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Job Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="jobType"
                                    value={formData.jobType}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 text-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                >
                                    <option value="">Select Type</option>
                                    <option value="Security Guard">Security Guard</option>
                                    <option value="Car driver">Car driver</option>
                                    <option value="Guard">Guard</option>
                                </select>
                            </div>
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Father Name */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Father Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    placeholder="Enter Your Father Name"
                                    className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Date of Birth */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className="block w-full border text-gray-400 border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Mobile Number */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    placeholder="Enter Your Mobile Number"
                                    className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email ID"
                                    className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Address */}
                            <div className="col-span-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter Your Address"
                                    className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-indigo-500"
                                />
                            </div>
                            {/* Upload Resume */}
                            <div className="col-span-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Upload Resume
                                </label>
                                <div className="border-2 border-dashed border-gray-300 p-4 rounded">
                                    <input
                                        type="file"
                                        name="resume"
                                        onChange={handleFileUpload}
                                        className="block w-full text-gray-600"
                                    />
                                    <p className="text-sm text-gray-500 mt-2">
                                        Click or drag a file to this area to upload.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className=" bg-gray-200 text-gray-800 py-2 px-4 border border-gray-300 rounded hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring focus:ring-indigo-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default recruitment;
