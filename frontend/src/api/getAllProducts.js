export async function getAllProducts() {
  const requestOptions = {
    method: "GET",
  };
  const url = `/api/get-product/`;
  try {
    const response = await fetch(url, requestOptions);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    // console.log("ERROR", err);
    return [];
  }
}
