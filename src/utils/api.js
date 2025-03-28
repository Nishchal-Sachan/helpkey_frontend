const API_URL = "http://localhost:3000/api/listings";

export const fetchListings = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const addListing = async (listingData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(listingData),
  });
  return res.json();
};

export const updateListing = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};

export const deleteListing = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
