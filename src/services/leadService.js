export const submitQuote = async (payload) => {
  try {
    const response = await fetch("http://localhost:5000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
