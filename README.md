
<br/>

<div align="center">

 Kanca is custom `React Hooks` library.


![npm](https://img.shields.io/npm/v/kanca?color=red&style=for-the-badge)
[![CodeFactor](https://www.codefactor.io/repository/github/enesusta/kanca/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/enesusta/kanca)
![npm bundle size](https://img.shields.io/bundlephobia/min/kanca?color=orange&style=for-the-badge)
![npm](https://img.shields.io/npm/dm/kanca?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/kanca?color=blue&style=for-the-badge)

</div>

## ☕️ Features

* Small and lightweight
* Easy to learn
* Functional approach
* Fully written in *Typescript*


## 🕺 Install

by using `npm`:
```bash
$ npm i kanca
```

by using `yarn`:

```bash
$ yarn add kanca
```

kanca uses [env-cmd](https://www.npmjs.com/package/env-cmd) as **peerDependency**. Make sure to install it if you want to environment variables in http hooks like `useFetch`. 

If you don't know how to install it, just follow below section

```bash
yarn add env-cmd
```

Therefore just create files in **root-dir** which named 
- `.env.development` and
- `.env.production` 
  
and modify as listed below.

.env.development
```env
REACT_APP_API=http://localhost:8080
```

.env.production
```env
REACT_APP_API=https://api.myawesomewebservice.com
```

After creating files `make sure to hide` those files in **.gitignore.** They might include our credentials etc.

You could set various **environment variables** that needs in your application in those files like `.env.development or .env.production.`

Then: modify your **package.json['scripts']** like listed below

```json
"scripts": {
    "start": "env-cmd -f ./.env.development react-scripts start",
    "build": "env-cmd -f ./.env.production react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

If you're ok until here, we can continue

You could import kanca **in two ways**

- kanca
- kanca/**subpackage-name**


What do I mean?

*kanca* has several subpackages. For example:

- http
- form
- util ( not implemented yet )

That's exactly why both imports are valid.


```jsx
import { useFetch } from "kanca";
```

or

```jsx
import { useFetch } from "kanca/http";
```


Before using any hook, you should read its documentation!


## 🎨 Hooks

- [useFetch](docs/useFetch.md)
- [useObject](docs/useObject.md)

## Made with

- [React](https://reactjs.org/)
- [Rollup](https://rollupjs.org/guide/en/)


## License

MIT © [enesusta](https://github.com/enesusta)
