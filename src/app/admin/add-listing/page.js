"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";


export default function AddListingForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();
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


  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const [imageFile, setImageFile] = useState(null);


  const baseUrl = "https://helpkey-backend.onrender.com/api";
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };


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
        // Handle checkbox fields (if any)
        setForm({
          ...form,
          [name]: e.target.checked,
        });
      } else if (type === "number") {
        // Ensure the value is a number for numeric fields
        setForm({
          ...form,
          [name]: Number(value),
        });
      } else {
        // Handle text, radio buttons, and other input types
        setForm({
          ...form,
          [name]: value,
        });
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);
  
    const {
      title, description, category, property_type,
      location, amenities, beds, bathrooms, guests,
      placeCategory, discount, roomType, numberOfRooms,
      floorNo, villaDetails, hotelDetails, price
    } = form;
  
    const payload = {
      title,
      description,
      category,
      property_type,
      location,
      amenities,
      beds,
      bathrooms,
      guests,
      place_category: placeCategory,
      discount,
      room_type: roomType,
      number_of_rooms: numberOfRooms,
      floor_no: floorNo,
      villa_details: villaDetails,
      hotel_details: hotelDetails,
      price,
    };
  
    try {
      const formData = new FormData();
  
      for (const key in payload) {
        const value = payload[key];
        if (value !== undefined && value !== null && value !== "") {
          if (typeof value === "object") {
            try {
              formData.append(key, JSON.stringify(value));
            } catch (e) {
              console.warn(`⚠️ Failed to stringify ${key}:`, value);
            }
          } else {
            formData.append(key, value);
          }
        }
      }
  
      if (imageFile) {
        formData.append("image", imageFile);
      } else {
        console.warn("⚠️ imageFile is undefined or not selected");
      }
  
      // Debugging formData entries
      console.log("FormData contents:");
      for (let [key, val] of formData.entries()) {
        console.log(`${key}:`, val);
      }
  
      const response = await fetch(`${baseUrl}/listings`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
  
      alert("Listing created successfully!");
      router.push("/admin");
  
    } catch (error) {
      setErrorMessage(error.message);
      console.error("❌ Error submitting form:", error);
    } finally {
      setLoading(false);
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
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
            <h2 className="text-2xl font-semibold mb-4">Basic Info</h2>
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
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Category</option>
                <option value="luxury">Luxury</option>
                <option value="budget">Budget</option>
                <option value="business">Business</option>
                <option value="family">Family</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
              disabled={
                !form.title ||
                !form.description ||
                !form.category ||
                !form.property_type ||
                !form.location
              }
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <>
            {renderPropertyTypeFields()}
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-400 text-white rounded mr-4"
            >
              Back
            </button>
            <button onClick={handleSubmit} className={`py-2 px-4  ${loading ? "bg-gray-400" : "bg-red-600 text-white"}`} disabled={loading}>
              {loading ? "Adding listing..." : "submit"}
            </button>
          </>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
