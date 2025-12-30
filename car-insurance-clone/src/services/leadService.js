const API_URL = "http://localhost:5123";

export const submitBikeLead = async (data) => {
  return fetch(`${API_URL}/bikeLeads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const submitCarLead = async (data) => {
  return fetch(`${API_URL}/carLeads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const submitMotorLead = async (data) => {
  return fetch(`${API_URL}/motorLeads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
