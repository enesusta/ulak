import { useState, useEffect } from "react";
import { debounceTime, tap, distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs";

export default function useObject(initial: any, delay: number = 500) {
  const [value, setValue] = useState(initial);
  const [onObject$] = useState(() => new Subject());

  const handlers = initial
    ? Object.keys(initial).map((key) => {
        return (event: any, isDom: boolean = true) => {
          if (isDom)
            onObject$.next(
              Object.assign({}, value, { [key]: event.target.value })
            );
          else onObject$.next(Object.assign({}, value, { [key]: event }));
        };
      })
    : null;

  useEffect(() => {
    const subscription = onObject$
      .pipe(
        debounceTime(delay),
        tap((a) => console.log(a)),
        distinctUntilChanged()
      )
      .subscribe(setValue);
    return () => subscription.unsubscribe();
  }, []);

  return [value, handlers];
}

/*function setState(event: any, key: string) {
    if (event?.target?.value)
      setValue(Object.assign({}, value, { [key]: event.target.value }));
    else setValue(Object.assign({}, value, { [key]: event }));
  }*/
