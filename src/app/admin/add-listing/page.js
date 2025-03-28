"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "@/app/components/Contact";

export default function AddListing() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    image_url: "",
    amenities: [],
    property_type: "",
    beds: "",
    bathrooms: "",
    guests: "",
    place_category: "",
    discount: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please log in first.");
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [router]);

  // Hardcoded lists for dropdowns
  const amenitiesList = [
    "WiFi", "Swimming Pool", "Air Conditioning", "Parking", "Fitness Center",
    "Pet Friendly", "Restaurant", "Room Service", "Spa", "Bar",
    "Conference Room", "Laundry Service"
  ];
  const propertyTypes = ["Apartment", "Hotel", "Villa", "Cottage", "Hostel"];
  const placeCategories = ["Luxury", "Budget", "Business", "Family", "Adventure"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAmenitiesChange = (e) => {
    const selectedAmenities = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm({ ...form, amenities: selectedAmenities });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token"); // Get JWT from localStorage
      if (!token) {
        setError("Unauthorized: No token found. Please login.");
        return;
      }

      const res = await fetch("https://vercel.com/nishchal-sachans-projects/helpkey-backend/5ucL15Uur9ntPwBmjW3rq73vHZeY/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Send token in headers
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add listing");
      }

      alert("Listing added successfully!");
      router.push("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="bg-custom-gradient lg:h-[75px] h-[75px] pt-3">
        <Navbar />
      </div>
      <h1 className="text-4xl text-center text-red-600 font-bold py-16">Add New Listing</h1>
      <div className="flex flex-col items-center justify-center px-4 py-10 flex-grow">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[495px]">
          <h2 className="text-3xl font-bold text-center mb-6">Property Details</h2>
          <form className="px-3" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="text" name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleChange} className="w-full p-2 mb-4 border" />
            <input type="number" name="beds" placeholder="Number of Beds" value={form.beds} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={form.bathrooms} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="number" name="guests" placeholder="Max Guests" value={form.guests} onChange={handleChange} required className="w-full p-2 mb-4 border" />

            {/* Property Type Dropdown */}
            <label className="block mb-2 font-bold">Property Type</label>
            <select name="property_type" value={form.property_type} onChange={handleChange} required className="w-full p-2 mb-4 border">
              <option value="">Select Property Type</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Place Category Dropdown */}
            <label className="block mb-2 font-bold">Place Category</label>
            <select name="place_category" value={form.place_category} onChange={handleChange} required className="w-full p-2 mb-4 border">
              <option value="">Select Place Category</option>
              {placeCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Amenities Dropdown */}
            <label className="block mb-2 font-bold">Select Amenities</label>
            <select multiple value={form.amenities} onChange={handleAmenitiesChange} className="w-full p-2 mb-4 border">
              {amenitiesList.map((amenity) => (
                <option key={amenity} value={amenity}>
                  {amenity}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500">Hold Ctrl (Windows) or Cmd (Mac) to select multiple.</p>

            <input type="number" name="discount" placeholder="Discount (%)" value={form.discount} onChange={handleChange} className="w-full p-2 mb-4 border" />

            <button type="submit" className={`py-2 px-4 w-full ${loading ? "bg-gray-400" : "bg-red-600 text-white"}`} disabled={loading}>
              {loading ? "Adding..." : "Add Listing"}
            </button>
          </form>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
