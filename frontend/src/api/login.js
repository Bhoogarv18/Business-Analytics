import { getDefaultHeaders } from "./utils";

export async function login(data) {
  let headers = getDefaultHeaders();

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  };
  const url = `http://localhost:5000/login`;
  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const jsonResponse = await response.json();
      const userId = jsonResponse.user_id;
      localStorage.setItem("userId", userId);
    }
    return response.status;
  } catch (err) {
    console.log("Response Login: error");
    return [];
  }
}
