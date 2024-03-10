export async function getAllProducts() {
  const requestOptions = {
    method: "GET",
  };
  const url = "http://localhost:5000/user_details";
  try {
    const response = await fetch(url, requestOptions);
    const jsonResponse = await response.json();
    console.log("Response: ", jsonResponse);
    return jsonResponse;
  } catch (err) {
    console.log("Response: error");
    return [];
  }
}
