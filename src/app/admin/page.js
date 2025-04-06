"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function AdminDashboard() {
  const router = useRouter();
  const [listings, setListings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState({ listings: true, bookings: true });
  const [error, setError] = useState({ listings: null, bookings: null });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://helpkey-backend.vercel.app/api/authuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // send HTTP-only cookie
        });

        const data = await res.json();
        if (!data.success || !data.isAuthenticated) {
          router.push("/admin/signup");
          return;
        }

        // Continue loading dashboard
        fetchListings();
        fetchBookings();
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/admin/signup");
      }
    };

    checkAuth();
  }, [router]);

  const fetchListings = async () => {
    try {
      const res = await fetch("https://helpkey-backend.vercel.app/api/listings");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch listings");
      setListings(data.data);
    } catch (err) {
      setError((prev) => ({ ...prev, listings: err.message }));
    } finally {
      setLoading((prev) => ({ ...prev, listings: false }));
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch("https://helpkey-backend.vercel.app/api/bookings");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch bookings");
      setBookings(data.data);
    } catch (err) {
      setError((prev) => ({ ...prev, bookings: err.message }));
    } finally {
      setLoading((prev) => ({ ...prev, bookings: false }));
    }
  };

  const updateBookingStatus = async (bookingId, status) => {
    try {
      const response = await fetch(`https://helpkey-backend.vercel.app/api/bookings/${bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update booking status");
      }

      console.log(`Booking ${bookingId} updated to ${status}`);
      await fetchBookings();
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("https://helpkey-backend.vercel.app/api/admin/logout", {
        method: "POST",
        credentials: "include", // ⬅️ to send the cookie
      });
  
      router.push("/admin/signup");
    } catch (error) {
      console.error("Logout failed:", error);
      router.push("/admin/signup"); // fallback redirect
    }
  };
  

  return (
    <div>
      <div className="bg-custom-gradient lg:h-[70px] h-[70px] pt-3">
        <Navbar />
      </div>

      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <button
            className="bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg w-full sm:w-auto"
            onClick={() => router.push("/admin/add-listing")}
          >
            Add New Listing
          </button>

          <button
            className="bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg mt-2 sm:mt-0 w-full sm:w-auto"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">Listings</h2>
        {loading.listings ? (
          <p>Loading listings...</p>
        ) : error.listings ? (
          <p className="text-red-500">{error.listings}</p>
        ) : listings.length === 0 ? (
          <p className="text-gray-500">No listings found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((listing) => (
              <li key={listing.id} className="border p-4 shadow-lg rounded-lg flex flex-col items-center">
                <div className="w-full max-w-xs h-auto flex items-center justify-center">
                  {listing.image_url ? (
                    <Image
                      src={listing.image_url}
                      alt={listing.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  ) : (
                    <div className="w-full max-w-xs h-40 bg-gray-300 flex items-center justify-center rounded-lg">
                      <span className="text-gray-600">No Image</span>
                    </div>
                  )}
                </div>

                <h2 className="text-lg md:text-xl font-semibold mt-2 text-center">{listing.title}</h2>
                <p className="text-gray-600 text-center">{listing.description}</p>
                <p className="font-bold text-center">&#8377;{listing.price}</p>

                <div className="mt-2 flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded"
                    onClick={() => router.push(`/admin/edit-listing/${listing.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded"
                    onClick={() => console.log(`Delete ${listing.id}`)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <h2 className="text-xl md:text-2xl font-semibold mt-10">Bookings</h2>
        {loading.bookings ? (
          <p>Loading bookings...</p>
        ) : error.bookings ? (
          <p className="text-red-500">{error.bookings}</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {bookings.map((booking) => (
              <li key={booking.id} className="border p-4 shadow-lg rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold">{booking.hotel_name}</h3>
                <p className="text-gray-600">Guest: {booking.guest_name}</p>
                <p className="text-gray-600">Check-in: {booking.check_in}</p>
                <p className="text-gray-600">Check-out: {booking.check_out}</p>
                <p className="font-bold">Status: {booking.status}</p>

                {booking.status === "Pending" && (
                  <div className="mt-2 flex gap-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded"
                      onClick={() => updateBookingStatus(booking.id, "Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded"
                      onClick={() => updateBookingStatus(booking.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
