export default function defaultHeaders(token: string): Headers {
  return new Headers({
    Authorization: `Bearer ${localStorage.getItem(token)}`,
    "Content-Type": "application/json",
  });
}; 