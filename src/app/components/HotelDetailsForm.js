"use client";

import { useState } from "react";

export default function HotelDetailsForm({ formData, setFormData, nextStep, prevStep }) {
  const [hotelData, setHotelData] = useState({
    num_rooms: formData.num_rooms || "",
    room_types: formData.room_types || { AC: 0, "Non-AC": 0, Other: 0 },
  });

  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleRoomTypeChange = (e) => {
    setHotelData({
      ...hotelData,
      room_types: { ...hotelData.room_types, [e.target.name]: Number(e.target.value) },
    });
  };

  const handleNext = () => {
    setFormData({ ...formData, ...hotelData });
    nextStep();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Hotel Details</h2>

      <label className="block mb-2 font-bold">Number of Rooms</label>
      <input
        type="number"
        name="num_rooms"
        value={hotelData.num_rooms}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border"
      />

      <label className="block mb-2 font-bold">Room Types</label>
      {Object.keys(hotelData.room_types).map((type) => (
        <div key={type} className="mb-2">
          <label className="block">{type} Rooms</label>
          <input
            type="number"
            name={type}
            value={hotelData.room_types[type]}
            onChange={handleRoomTypeChange}
            className="w-full p-2 border"
          />
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="py-2 px-4 bg-gray-500 text-white">Back</button>
        <button onClick={handleNext} className="py-2 px-4 bg-red-600 text-white">Next</button>
      </div>
    </div>
  );
}
