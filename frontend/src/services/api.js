const BASE_URL = "http://127.0.0.1:8000/api";

// Fetch clients
export const fetchClients = async () => {
  const response = await fetch(`${BASE_URL}/clients/`);
  return response.json();
};

// Fetch projects
export const fetchProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects/`);
  return response.json();
};

// Send contact form
export const submitContact = async (data) => {
  const response = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Subscribe email
export const subscribeEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/subscribe/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
};
