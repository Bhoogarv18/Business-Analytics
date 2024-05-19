export function getDefaultHeaders() {
  let headers = new Headers();

  headers.set("Content-Type", "application/json");

  return headers;
}
