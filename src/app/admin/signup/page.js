"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "@/app/components/Contact";
import Link from "next/link";

export default function AdminSignup() {
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    role: "admin",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://helpkey-backend.onrender.com/api/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      alert("Admin registered successfully!");
      router.push("/admin");
    } catch (err) {
      if (err.message === "Admin already exists") {
        alert("You're already registered. Please log in.");
        router.push("/admin"); // or "/admin/login" if that's the correct route
      } else {
        setError(err.message);
      }
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="bg-custom-gradient h-[75px] pt-3">
        <Navbar />
      </div>

      <h1 className="text-4xl text-center text-red-600 font-bold py-10">Admin Signup</h1>

      <div className="flex flex-col items-center justify-center px-4 py-10 flex-grow">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Create Admin Account</h2>

          <form className="px-3" onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 mb-4 border" />
            <input type="text" name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={handleChange} className="w-full p-2 mb-4 border" />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-2 mb-4 border" />

            <button type="submit" className={`py-2 px-4 w-full ${loading ? "bg-gray-400" : "bg-red-600 text-white"}`} disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p>already have account?<Link href={"/admin/login"}>Login</Link></p>
        </div>

        <Contact />
      </div>

      <Footer />
    </div>
  );
}
