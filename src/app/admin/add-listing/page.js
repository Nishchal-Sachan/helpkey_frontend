
// "use client";

// import { useState } from "react";

// // Placeholder imports – replace these with your actual detail components
// import HotelDetailsForm from "./HotelDetailsForm";
// import HostelDetailsForm from "./HostelDetailsForm";
// import ResortDetailsForm from "./ResortDetailsForm";
// import RoomDetailsForm from "./RoomDetailsForm";
// import EntirePlaceDetailsForm from "./EntirePlaceDetailsForm";
// import SharedHostelRoomDetailsForm from "./SharedHostelRoomDetailsForm";
// import ApartmentDetailsForm from "./ApartmentDetailsForm";
// import VillaDetailsForm from "./VillaDetailsForm";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Contact from "../../components/Contact";

// export default function AddListingForm() {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     category: "",
//     property_type: "",
//     location: "",
//     image_url: "",
//     amenities: [],
//     beds: 0,
//     bathrooms: 0,
//     guests: 0,
//     place_category: "",
//     discount: 0,
//   });
//   const [categoryDetails, setCategoryDetails] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = () => {
//   //   const finalData = { ...form, ...categoryDetails };
//   //   console.log("Submitting listing:", finalData);
//   //   // Add your API submission logic here
//   // };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       setErrorMessage(""); // Reset previous errors

//       const payload = {
//         ...form,
//         ...categoryDetails,
//         image_url: form.imageUrls || "", // Ensure correct key
//       };

//       // Fix required fields check
//       if (!payload.title?.trim() || !payload.property_type?.trim()) {
//         setErrorMessage("Please fill all required fields.");
//         setLoading(false);
//         return;
//       }

//       // If hotel, add hotelDetails
//       if (
//         payload.property_type.toLowerCase() === "hotel" &&
//         payload.roomDetails
//       ) {
//         payload.hotelDetails = payload.roomDetails;
//         delete payload.roomDetails;
//       }
//       console.log("Payload:", payload);

//       const response = await fetch(
//         "https://helpkey-backend.onrender.com/api/listings",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload), // Send the data as JSON
//           credentials: "include", // Ensure to send the HTTP-only cookie
//         }
//       );

//       if (response.ok) {
//         const data = await response.json(); // Get JSON response
//         if (data.success) {
//           alert("Listing created successfully!");

//           // Reset form
//           setForm({
//             title: "",
//             description: "",
//             category: "",
//             property_type: "",
//             location: "",
//             image_url: "",
//             amenities: [],
//             beds: 0,
//             bathrooms: 0,
//             guests: 0,
//             place_category: "",
//             discount: 0,
//           });
//           setCategoryDetails({});
//           setStep(1);
//           Router.push("/admin");
//         } else {
//           setErrorMessage("Listing creation failed. Please try again.");
//         }
//       } else {
//         if (response.status === 401) {
//           setErrorMessage("Unauthorized. Please log in again.");
//         } else {
//           setErrorMessage("Something went wrong while submitting.");
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Something went wrong while submitting.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderPropertyTypeForm = () => {
//     console.log("Selected property type:", form.property_type);

//     switch (form.property_type.toLowerCase()) {
//       case "hotel":
//         return (
//           <HotelDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       case "hostel":
//         return (
//           <HostelDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       // case "resort":
//       //   return (
//       //     <ResortDetailsForm
//       //       categoryDetails={categoryDetails}
//       //       setCategoryDetails={setCategoryDetails}
//       //       handleSubmit={handleSubmit}
//       //       prevStep={prevStep}
//       //     />
//       //   );
//       case "room":
//         return (
//           <RoomDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       // case "entire place":
//       //   return (
//       //     <EntirePlaceDetailsForm
//       //       categoryDetails={categoryDetails}
//       //       setCategoryDetails={setCategoryDetails}
//       //       handleSubmit={handleSubmit}
//       //       prevStep={prevStep}
//       //     />
//       //   );
//       case "shared hostel room":
//         return (
//           <SharedHostelRoomDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       case "apartment":
//         return (
//           <ApartmentDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       case "villa":
//         return (
//           <VillaDetailsForm
//             categoryDetails={categoryDetails}
//             setCategoryDetails={setCategoryDetails}
//             handleSubmit={handleSubmit}
//             prevStep={prevStep}
//           />
//         );
//       default:
//         return (
//           <div className="text-center">
//             <p className="mb-4 text-lg font-medium">
//               No additional details required for this type.
//             </p>
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={prevStep}
//                 className="px-4 py-2 bg-gray-400 text-white rounded"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="px-4 py-2 bg-red-600 text-white rounded"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         );
//         console.log("Default case hit");
//         return <div>Nothing matched</div>;
//     }
//   };

//   return (
//     <>
//       <div className="bg-custom-gradient lg:h-[70px] h-[70px] pt-3">
//         <Navbar />
//       </div>
//       <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
//         {step === 1 && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold mb-4">Basic Info</h2>
//             <div>
//               <label className="block text-sm font-medium">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Description</label>
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Property Type</label>
//               <select
//                 name="property_type"
//                 value={form.property_type}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-2 rounded"
//               >
//                 <option value="">Select Type</option>
//                 <option value="Room">Room</option>
//                 {/* <option value="Entire Place">Entire Place</option> */}
//                 <option value="Shared Hostel Room">Shared Hostel Room</option>
//                 <option value="Apartment">Apartment</option>
//                 <option value="Villa">Villa</option>
//                 <option value="Hotel">Hotel</option>
//                 <option value="Hostel">Hostel</option>
//                 {/* <option value="Resort">Resort</option> */}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Category</label>
//               <select
//                 name="category"
//                 value={form.category}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-2 rounded"
//               >
//                 <option value="">Select Category</option>
//                 <option value="luxury">Luxury</option>
//                 <option value="budget">Budget</option>
//                 <option value="business">Business</option>
//                 <option value="family">Family</option>
//                 <option value="adventure">Adventure</option>
//               </select>
//             </div>
//             <button
//               onClick={nextStep}
//               className="px-4 py-2 bg-blue-600 text-white rounded"
//               disabled={
//                 !form.title ||
//                 !form.description ||
//                 !form.category ||
//                 !form.property_type
//               }
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {step === 2 && renderPropertyTypeForm()}
//       </div>
//       <Contact />
//       <Footer />
//     </>
//   );
// }



"use client";

import { useState } from "react";
import Router from "next/router";
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
  
    const payload = {
      title: form.title,
      description: form.description,
      category: form.category,  // Assuming category maps to place_category
      property_type: form.property_type,
      location: form.location,
      image_url: form.imageUrl,  // Ensure this is the correct field
      amenities: form.amenities,
      beds: form.beds,
      bathrooms: form.bathrooms,
      guests: form.guests,
      place_category: form.placeCategory,  // Ensure this matches what backend expects
      discount: form.discount,
      room_type: form.roomType,  // Include only if property_type is hotel or hostel
      number_of_rooms: form.numberOfRooms,  // Include only if property_type is hotel, hostel, or villa
      floor_no: form.floorNo,  // Include for hotel, hostel, apartment, and villa
      villa_details: form.villaDetails,  // Include for villa type only
      hotel_details: form.hotelDetails,  // Include for hotel type only
      price: form.price,  // Price is assumed to be a numeric value, ensure form sends it as a number
    };
  
    console.log("Payload being sent:", payload);
  
    try {
      const response = await fetch("https://helpkey-backend.onrender.com/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Ensure the token is set correctly
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
  
      // Handle successful response
      console.log("Listing created successfully", data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-red-600 m-2 text-white rounded"
            >
              Submit
            </button>
          </>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
