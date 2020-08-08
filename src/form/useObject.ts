import { useState, useEffect } from "react";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs";

export default function useObject(initial: any, delay: number = 500) {
  const [value, setValue] = useState(initial);
  const [onObject$] = useState(() => new Subject());

  const handlers = initial
    ? Object.keys(initial).map((key) => {
        return (event: any) => {
          if (event?.target?.value)
            if (event.target.value?.constructor === Object) Object.assign({}, value, { [key]: "" });
            else onObject$.next( Object.assign({}, value, { [key]: event.target.value }));
          else onObject$.next(Object.assign({}, value, { [key]: event }));
        };
      })
    : null;

  useEffect(() => {
    const subscription =
     onObject$
      .pipe(debounceTime(delay), distinctUntilChanged())
      .subscribe(setValue);
    return () => subscription.unsubscribe();
  }, []);

  return [value, handlers];
}
