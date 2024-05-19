import { getDefaultHeaders } from "./utils";

export async function signUp(data) {
  let headers = getDefaultHeaders();

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  };
  const url = `http://localhost:5000/signUp`;
  try {
    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const jsonResponse = await response.json();
      const userId = jsonResponse._id;
      localStorage.setItem("userId", userId);
    }

    return response.status;
  } catch (err) {
    console.log("Response SignUp: error");
    return [];
  }
}
