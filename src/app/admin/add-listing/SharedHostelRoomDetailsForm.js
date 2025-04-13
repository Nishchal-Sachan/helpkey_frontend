"use client";

import { useState } from "react";

export default function SharedHostelRoomDetailsForm({ categoryDetails, setCategoryDetails, handleSubmit, prevStep }) {
  const handleChange = (e) => {
    setCategoryDetails({ ...categoryDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-3">
      <input
        type="text"
        name="roomName"
        placeholder="Room Name"
        value={categoryDetails.roomName || ""}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border"
      />

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
