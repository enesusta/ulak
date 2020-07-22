export default function handleResponseType(response: Response): Promise<any> {
  const contentType: string | null = response.headers.get("Content-Type");

  if (response.ok) {
    if (contentType == null) return Promise.reject(null);
    else if (contentType.includes("text")) return response.text();
    else if (contentType.includes("json")) return response.json();
    else throw new Error(`Unsupported response content-type: ${contentType}`);
  } else {
    return Promise.reject(response);
  }
}
