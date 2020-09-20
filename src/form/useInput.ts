import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState(null);
  const handler = (e: any) => setValue(e.target.value);
  return [value, handler];
}
