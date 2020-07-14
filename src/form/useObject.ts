import {useState} from 'react';

export default function useObject(initial: any) {
  const [value, setValue] = useState(initial);

  const handlers = initial ? Object.keys(initial).map(key => {
    return (e: any) => setValue(Object.assign({}, value, {[key]: e.target.value}));
  }) : null

  return [value, handlers];
};
