export async function checkAuth() {
    try {
      const res = await fetch("https://helpkey-backend.vercel.app/api/authuser", {
        method: "GET",
        credentials: "include", // send cookies
      });
  
      const data = await res.json();
      return data.success ? data.adminId : null; // ✅ updated here
    } catch (err) {
      console.error("Auth check failed:", err);
      return null;
    }
  }
  