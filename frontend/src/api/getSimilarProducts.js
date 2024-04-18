import { getDefaultHeaders } from "./utils";

export async function getSimilarProducts(data) {
  let headers = getDefaultHeaders();
  let responses = []; // Use 'responses' to store all fetched responses

  // Use a counter to limit the loop to 3 iterations
  const maxItems = 3;
  let count = 0;

  // Use for...of loop to correctly handle asynchronous operations
  for (const el of data) {
    if (count >= maxItems) {
      break; // Break out of the loop if we've reached the limit
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ url: el }), // Convert 'el' to JSON string
      headers: headers,
    };
    const url = "http://localhost:5000/scrape_url";

    try {
      const response = await fetch(url, requestOptions);
      const jsonResponse = await response.json();
      console.log("Response URL:", jsonResponse);

      // Push jsonResponse to the responses array
      responses.push(jsonResponse);
    } catch (err) {
      console.log("Error:", err.message);
      // Handle error (e.g., log or throw)
      // For now, we continue the loop
    }

    count++; // Increment the counter after each iteration
  }

  return responses; // Return the array of all responses
}
