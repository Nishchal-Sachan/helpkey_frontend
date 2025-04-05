"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Contact from "@/app/components/Contact";
import HotelDetailsForm from "../../../components/HotelDetailsForm";

export default function EditListing() {
  const router = useRouter();
  const { id } = useParams();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const [hotelDetails, setHotelDetails] = useState({
    numRooms: "",
    roomTypes: [],
  });

  const amenitiesList = [
    "WiFi", "Swimming Pool", "Air Conditioning", "Parking", "Fitness Center",
    "Pet Friendly", "Restaurant", "Room Service", "Spa", "Bar",
    "Conference Room", "Laundry Service"
  ];

  const propertyTypes = ["Room", "Entire Place", "Shared Hostel Room", "Apartment", "Villa", "Hotel", "Hostel", "Resort", "Other"];
  const placeCategories = ["Luxury", "Budget", "Business", "Family", "Adventure"];

  useEffect(() => {
    if (id) fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const res = await fetch(`https://helpkey-backend.vercel.app/api/listings/${id}`);
      if (!res.ok) throw new Error("Failed to fetch listing");

      const data = await res.json();
      if (!data.success) throw new Error(data.error);

      setForm({
        ...data.data,
        amenities: data.data.amenities || [],
      });

      if (data.data.property_type === "Hotel" && data.data.hotelDetails) {
        setHotelDetails(data.data.hotelDetails);
        setStep(2);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAmenitiesChange = (e) => {
    const selectedAmenities = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm({ ...form, amenities: selectedAmenities });
  };

  const nextStep = () => {
    if (form.property_type === "Hotel") {
      setStep(2);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => setStep(1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const finalData = {
        ...form,
        hotelDetails: form.property_type === "Hotel" ? hotelDetails : null,
      };

      const res = await fetch(`https://helpkey-backend.vercel.app/api/listings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      alert("Listing updated successfully!");
      router.push("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="bg-custom-gradient h-[75px] pt-3">
        <Navbar />
      </div>

      <h1 className="text-4xl text-center text-red-600 font-bold py-10 md:py-16">
        {step === 1 ? "Edit Listing" : "Edit Hotel Details"}
      </h1>

      <div className="flex flex-col items-center justify-center px-4 py-10 flex-grow">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            {step === 1 ? "Update Property Details" : "Update Hotel Details"}
          </h2>

          {step === 1 ? (
            <form className="px-3">
              <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <input type="text" name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleChange} className="w-full p-2 mb-4 border" />
              <input type="number" name="beds" placeholder="Number of Beds" value={form.beds} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={form.bathrooms} onChange={handleChange} required className="w-full p-2 mb-4 border" />
              <input type="number" name="guests" placeholder="Max Guests" value={form.guests} onChange={handleChange} required className="w-full p-2 mb-4 border" />

              <label className="block mb-2 font-bold">Property Type</label>
              <select name="property_type" value={form.property_type} onChange={handleChange} required className="w-full p-2 mb-4 border">
                <option value="">Select Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <label className="block mb-2 font-bold">Place Category</label>
              <select name="place_category" value={form.place_category} onChange={handleChange} required className="w-full p-2 mb-4 border">
                <option value="">Select Place Category</option>
                {placeCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <label className="block mb-2 font-bold">Select Amenities</label>
              <select multiple value={form.amenities} onChange={handleAmenitiesChange} className="w-full p-2 mb-4 border">
                {amenitiesList.map((amenity) => (
                  <option key={amenity} value={amenity}>
                    {amenity}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mb-4">Hold Ctrl (Windows) or Cmd (Mac) to select multiple.</p>

              <input type="number" name="discount" placeholder="Discount (%)" value={form.discount} onChange={handleChange} className="w-full p-2 mb-4 border" />

              <button type="button" onClick={nextStep} className="py-2 px-4 w-full bg-red-600 text-white">
                {form.property_type === "Hotel" ? "Next" : loading ? "Updating..." : "Update Listing"}
              </button>
            </form>
          ) : (
            <HotelDetailsForm
              hotelDetails={hotelDetails}
              setHotelDetails={setHotelDetails}
              handleSubmit={handleSubmit}
              prevStep={prevStep}
            />
          )}
        </div>

        <Contact />
      </div>

      <Footer />
    </div>
  );
}
