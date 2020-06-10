# kanca

> Kanca is custom react hooks library.

[![NPM](https://img.shields.io/npm/v/kanca.svg)](https://www.npmjs.com/package/kanca) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kanca
```

## Usage

```tsx
import React from 'react'

import { useFetch } from 'kanca';

const SimpleComponent = ({ data }) => {
  return (
    <div className="">name is {data.name} surname is {data.surname}</div>
  )
}

const App = () => {
  const [data, loading] = useFetch('http://localhost:8080/hello');

  return (
    <div>
      {loading ? 'loading' : <SimpleComponent data={data} />}
    </div>
  )
};

export default App;
```

## License

MIT © [enesusta](https://github.com/enesusta)

---
