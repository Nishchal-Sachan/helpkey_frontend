"use client";

export default function HotelDetailsForm({ categoryDetails, setCategoryDetails, handleSubmit, prevStep }) {
  const handleChange = (e) => {
    setCategoryDetails({ ...categoryDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-3">
      <select
        name="roomType"
        value={categoryDetails.roomType || ""}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border"
      >
        <option value="" disabled>Select Room Type</option>
        <option value="ac_standard">AC Standard</option>
        <option value="ac_deluxe">AC Deluxe</option>
        <option value="non_ac_standard">Non-AC Standard</option>
        <option value="suite">Suite</option>
        <option value="executive">Executive</option>
      </select>

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={categoryDetails.price || ""}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border"
      />

      <input
        type="text"
        name="imageUrls"
        placeholder="Image URLs (comma separated)"
        value={categoryDetails.imageUrls || ""}
        onChange={handleChange}
        className="w-full p-2 mb-4 border"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 bg-gray-400 text-white rounded"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="py-2 px-4 bg-red-600 text-white rounded"
        >
          Submit Listing
        </button>
      </div>
    </div>
  );
}
