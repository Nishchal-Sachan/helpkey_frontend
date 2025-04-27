"use client";

import { useState, useEffect } from "react";
import Router from "next/router";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";

export default function EditListingForm({ listingId }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    property_type: "",
    location: "",
    image_url: "",
    amenities: [],
    beds: 0,
    bathrooms: 0,
    guests: 0,
    place_category: "",
    discount: 0,
    roomDetails: {},
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch the listing data when the component mounts
    const fetchListingData = async () => {
      try {
        const response = await fetch(`https://helpkey-backend.onrender.com/api/listings/${listingId}`);
        const data = await response.json();
        if (response.ok) {
          setForm({
            ...data,
            amenities: data.amenities || [],
          });
        } else {
          throw new Error(data.error || "Error fetching listing data");
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchListingData();
  }, [listingId]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;

    // Handling multi-select dropdowns
    if (type === "select-multiple") {
      const selectedValues = Array.from(selectedOptions, (option) => option.value);
      setForm({
        ...form,
        [name]: selectedValues,
      });
    } else {
      // Handling regular inputs (text, number, etc.)
      if (type === "checkbox") {
        setForm({
          ...form,
          [name]: e.target.checked,
        });
      } else if (type === "number") {
        setForm({
          ...form,
          [name]: Number(value),
        });
      } else {
        setForm({
          ...form,
          [name]: value,
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      category: form.category, // Assuming category maps to place_category
      property_type: form.property_type,
      location: form.location,
      image_url: form.imageUrl, // Ensure this is the correct field
      amenities: form.amenities,
      beds: form.beds,
      bathrooms: form.bathrooms,
      guests: form.guests,
      place_category: form.placeCategory, // Ensure this matches what backend expects
      discount: form.discount,
      room_type: form.roomType, // Include only if property_type is hotel or hostel
      number_of_rooms: form.numberOfRooms, // Include only if property_type is hotel, hostel, or villa
      floor_no: form.floorNo, // Include for hotel, hostel, apartment, and villa
      villa_details: form.villaDetails, // Include for villa type only
      hotel_details: form.hotelDetails, // Include for hotel type only
      price: form.price, // Price is assumed to be a numeric value, ensure form sends it as a number
    };

    try {
      const response = await fetch(`https://helpkey-backend.onrender.com/api/listings/${listingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: 'include', // This ensures the browser sends the cookies with the request
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Handle successful response
      Router.push("/admin"); // Navigate to the dashboard or listing page after successful update
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const renderPropertyTypeFields = () => {
    switch (form.property_type.toLowerCase()) {
      case "hotel":
        return (
          <>
            <div>
              <label className="block text-sm font-medium p-2">Room Type</label>
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Room Type</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
                <option value="Suite">Suite</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Rooms</label>
              <input
                type="number"
                name="numberOfRooms"
                value={form.numberOfRooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Amenities</label>
              <select
                name="amenities"
                multiple
                value={form.amenities}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Wi-Fi">Wi-Fi</option>
                <option value="Pool">Pool</option>
                <option value="Gym">Gym</option>
                <option value="Spa">Spa</option>
                <option value="Parking">Parking</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Bar">Bar</option>
                <option value="Air Conditioning">Air Conditioning</option>
                <option value="TV">TV</option>
                <option value="Laundry">Laundry</option>
              </select>
            </div>
          </>
        );



      case "hostel":
        return (
          <>
            <div>
              <label className="block text-sm font-medium">Room Type</label>
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Room Type</option>
                <option value="Shared">Shared</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Rooms</label>
              <input
                type="number"
                name="numberOfRooms"
                value={form.numberOfRooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </>
        );

      case "apartment":
        return (
          <>
            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Type</option>
                <option value="Studio">Studio</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Floor Number</label>
              <input
                type="number"
                name="floorNo"
                value={form.floorNo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </>
        );

      case "villa":
        return (
          <>
            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Type</option>
                <option value="Villa">Villa</option>
                <option value="Luxury Villa">Luxury Villa</option>
                <option value="Beachfront Villa">Beachfront Villa</option>
                <option value="Private Villa">Private Villa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Number of Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-custom-gradient lg:h-[70px] h-[70px] pt-3">
        <Navbar />
      </div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Edit Listing</h2>
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Property Type</label>
              <select
                name="property_type"
                value={form.property_type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Hotel">Hotel</option>
                <option value="Hostel">Hostel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                name="placeCategory"
                value={form.placeCategory}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="luxury">Luxury</option>
                <option value="budget">Budget</option>
                <option value="business">Business</option>
                <option value="family">Family</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
            <div className="space-x-4">
              <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && renderPropertyTypeFields()}
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-green-500 text-white rounded"
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
        {errorMessage && (
          <div className="mt-4 text-red-500">{errorMessage}</div>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
