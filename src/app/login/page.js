const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      if (!data.success) throw new Error(data.error);
  
      localStorage.setItem("token", data.token); // Save token
      router.push("/admin"); // Redirect to admin dashboard
    } catch (err) {
      setError(err.message);
    }
  };
  