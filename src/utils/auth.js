export async function checkAuth() {
    try {
      const res = await fetch("https://helpkey-backend.vercel.app/api/authuser", {
        method: "GET",
        credentials: "include", // 👈 important: send cookies
      });
  
      const data = await res.json();
      return data.isAuthenticated ? data.user : null;
    } catch (err) {
      console.error("Auth check failed:", err);
      return null;
    }
  }
  