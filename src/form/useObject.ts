import { useState } from "react";

export default function useObject(initial: any) {
  const [value, setValue] = useState(initial);

  function setState(e: any, key: string) {
    const isDomParameter = Object.values(e).indexOf("value") > -1;
    if (isDomParameter) setValue(Object.assign({}, value, { [key]: e.target.value }));
    else setValue(Object.assign({}, value, {[key]: e}));
  }

  const handlers = initial
    ? Object.keys(initial).map((key) => {
        return (e: any) => setState(e, key);
      })
    : null;

  return [value, handlers];
}

 /*const handlers = initial
    ? Object.keys(initial).map((key) => {
        return (e: any) =>
          setValue(Object.assign({}, value, { [key]: e.target.value }));
      })
    : null;
*/