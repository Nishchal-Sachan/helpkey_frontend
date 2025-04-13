// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Contact from "@/app/components/Contact";
// import HotelDetailsForm from "../../components/HotelDetailsForm"; // New component for hotel-specific fields

// export default function AddListing() {
//   const router = useRouter();
//   const [step, setStep] = useState(1); // Step 1: General Details, Step 2: Hotel Details (if needed)
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     location: "",
//     image_url: "",
//     amenities: [],
//     property_type: "",
//     beds: "",
//     bathrooms: "",
//     guests: "",
//     place_category: "",
//     discount: "",
//   });

//   const [hotelDetails, setHotelDetails] = useState({
//     numRooms: "",
//     roomTypes: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const amenitiesList = [
//     "WiFi", "Swimming Pool", "Air Conditioning", "Parking", "Fitness Center",
//     "Pet Friendly", "Restaurant", "Room Service", "Spa", "Bar",
//     "Conference Room", "Laundry Service"
//   ];
//   const propertyTypes = ["Room", "Entire Place", "Shared Hostel Room", "Apartment", "Villa", "Hotel", "Hostel", "Resort", "Other"];
//   const placeCategories = ["Luxury", "Budget", "Business", "Family", "Adventure"];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAmenitiesChange = (e) => {
//     const selectedAmenities = Array.from(e.target.selectedOptions, (option) => option.value);
//     setForm({ ...form, amenities: selectedAmenities });
//   };

//   const nextStep = () => {
//     if (form.property_type === "Hotel") {
//       setStep(2);
//     } else {
//       handleSubmit(); // Skip to submission if not a hotel
//     }
//   };

//   const prevStep = () => {
//     setStep(1);
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       console.log("Submitting listing...");
//       const finalData = {
//         ...form,
//         hotelDetails: form.property_type === "Hotel" ? hotelDetails : null,
//       };

//       const res = await fetch("https://helpkey-backend.onrender.com/api/listings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // 👈 Send cookies
//         body: JSON.stringify(finalData),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || "Failed to add listing");
//       }

//       alert("Listing added successfully!");
//       router.push("/admin");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <div className="bg-gray-200 min-h-screen flex flex-col">
//       <div className="bg-custom-gradient h-[75px] pt-3">
//         <Navbar />
//       </div>

//       <h1 className="text-4xl text-center text-red-600 font-bold py-10 md:py-16">
//         {step === 1 ? "Add New Listing" : "Hotel Details"}
//       </h1>

//       <div className="flex flex-col items-center justify-center px-4 py-10 flex-grow">
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             {step === 1 ? "Property Details" : "Additional Hotel Details"}
//           </h2>

//           {step === 1 ? (
//             <form className="px-3">
//               <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <input type="text" name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleChange} className="w-full p-2 mb-4 border" />
//               <input type="number" name="beds" placeholder="Number of Beds" value={form.beds} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={form.bathrooms} onChange={handleChange} required className="w-full p-2 mb-4 border" />
//               <input type="number" name="guests" placeholder="Max Guests" value={form.guests} onChange={handleChange} required className="w-full p-2 mb-4 border" />

//               <label className="block mb-2 font-bold">Property Type</label>
//               <select name="property_type" value={form.property_type} onChange={handleChange} required className="w-full p-2 mb-4 border">
//                 <option value="">Select Property Type</option>
//                 {propertyTypes.map((type) => (
//                   <option key={type} value={type}>{type}</option>
//                 ))}
//               </select>

//               <label className="block mb-2 font-bold">Place Category</label>
//               <select name="place_category" value={form.place_category} onChange={handleChange} required className="w-full p-2 mb-4 border">
//                 <option value="">Select Place Category</option>
//                 {placeCategories.map((category) => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>

//               <label className="block mb-2 font-bold">Select Amenities</label>
//               <select multiple value={form.amenities} onChange={handleAmenitiesChange} className="w-full p-2 mb-4 border">
//                 {amenitiesList.map((amenity) => (
//                   <option key={amenity} value={amenity}>
//                     {amenity}
//                   </option>
//                 ))}
//               </select>

//               <input type="number" name="discount" placeholder="Discount (%)" value={form.discount} onChange={handleChange} className="w-full p-2 mb-4 border" />

//               <button type="button" onClick={nextStep} className="py-2 px-4 w-full bg-red-600 text-white">
//                 {form.property_type === "Hotel" ? "Next" : "Add Listing"}
//               </button>
//             </form>
//           ) : (
//             <HotelDetailsForm hotelDetails={hotelDetails} setHotelDetails={setHotelDetails} handleSubmit={handleSubmit} prevStep={prevStep} />
//           )}
//         </div>

//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   );
// }
"use client";

import { useState } from "react";

// Placeholder imports – replace these with your actual detail components
import HotelDetailsForm from "./HotelDetailsForm";
import HostelDetailsForm from "./HostelDetailsForm";
import ResortDetailsForm from "./ResortDetailsForm";
import RoomDetailsForm from "./RoomDetailsForm";
import EntirePlaceDetailsForm from "./EntirePlaceDetailsForm";
import SharedHostelRoomDetailsForm from "./SharedHostelRoomDetailsForm";
import ApartmentDetailsForm from "./ApartmentDetailsForm";
import VillaDetailsForm from "./VillaDetailsForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

export default function AddListingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    property_type: "",
  });
  const [categoryDetails, setCategoryDetails] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };




  // const handleSubmit = () => {
  //   const finalData = { ...form, ...categoryDetails };
  //   console.log("Submitting listing:", finalData);
  //   // Add your API submission logic here
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const listingData = {
      ...form,
      details: categoryDetails, // all specific form data goes here
    };
  
    try {
      const res = await fetch('http://localhost:5000/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
        credentials: 'include',
      });
  
      const result = await res.json();
  
      if (!res.ok) throw new Error(result.message || 'Failed to add listing');
  
      alert('Listing added successfully!');
    } catch (err) {
      console.error('Error:', err);
      alert(err.message);
    }
  };
  
  
  
  
  
  

  const renderPropertyTypeForm = () => {
    console.log("Selected property type:", form.property_type);


    switch (form.property_type.toLowerCase()) {
      case "hotel":
        return (
          <HotelDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      case "hostel":
        return (
          <HostelDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      // case "resort":
      //   return (
      //     <ResortDetailsForm
      //       categoryDetails={categoryDetails}
      //       setCategoryDetails={setCategoryDetails}
      //       handleSubmit={handleSubmit}
      //       prevStep={prevStep}
      //     />
      //   );
      case "room":
        return (
          <RoomDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      // case "entire place":
      //   return (
      //     <EntirePlaceDetailsForm
      //       categoryDetails={categoryDetails}
      //       setCategoryDetails={setCategoryDetails}
      //       handleSubmit={handleSubmit}
      //       prevStep={prevStep}
      //     />
      //   );
      case "shared hostel room":
        return (
          <SharedHostelRoomDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      case "apartment":
        return (
          <ApartmentDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      case "villa":
        return (
          <VillaDetailsForm
            categoryDetails={categoryDetails}
            setCategoryDetails={setCategoryDetails}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      default:
        return (
          <div className="text-center">
            <p className="mb-4 text-lg font-medium">No additional details required for this type.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded">Back</button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-red-600 text-white rounded">Submit</button>
            </div>
          </div>
        );
        console.log("Default case hit");
      return (
        <div>Nothing matched</div>
      );
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
            <div>
              <label className="block text-sm font-medium">Property Type</label>
              <select
                name="property_type"
                value={form.property_type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Type</option>
                <option value="Room">Room</option>
                {/* <option value="Entire Place">Entire Place</option> */}
                <option value="Shared Hostel Room">Shared Hostel Room</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Hotel">Hotel</option>
                <option value="Hostel">Hostel</option>
                {/* <option value="Resort">Resort</option> */}
              </select>
            </div>
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
              disabled={!form.title || !form.description || !form.category || !form.property_type}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && renderPropertyTypeForm()}

      </div>
      <Contact />
      <Footer />
    </>
  );
}
