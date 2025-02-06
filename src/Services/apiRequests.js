import { API_URL } from "../Utils/constants";

export async function verifyInformationWithAI(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const response = await fetch(`${API_URL}/`, options);

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
