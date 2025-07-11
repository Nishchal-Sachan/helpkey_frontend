"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = "https://helpkey-backend.onrender.com/api";
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const res = await fetch(`${baseUrl}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ send cookies
        body: JSON.stringify(form),
      });
  
      const result = await res.json();
      if (!result.success) throw new Error(result.error);
  
      alert("Login successful!");
      router.push("/admin"); // ✅ Redirect after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl text-center text-red-600 font-bold py-10">Admin Login</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign in to Admin Panel</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="px-3" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 mb-4 border" />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-2 mb-4 border" />

          <button type="submit" className={`py-2 px-4 w-full ${loading ? "bg-gray-400" : "bg-red-600 text-white"}`} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>Don't have an account? <Link href={"/admin/signup"} className="text-blue-600 underline">Signup</Link></p>

        
      </div>
    </div>
  );
}
