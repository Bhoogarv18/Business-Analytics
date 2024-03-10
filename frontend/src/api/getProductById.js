// /users/<id>

export async function getProductById(id) {
  const requestOptions = {
    method: "GET",
  };
  const url = `http://localhost:5000/product_details/${id}`;
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
