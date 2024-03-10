export async function getAllProducts() {
  const user_id = localStorage.getItem("userId");
  const requestOptions = {
    method: "GET",
  };
  // const url = "http://localhost:5000/product_details";
  const url = `http://localhost:5000/userProducts/${user_id}`;
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
