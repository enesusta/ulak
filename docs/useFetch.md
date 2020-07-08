## Index

- [useFetch](#usefetch)
    - [Using Without Environment Variables](#using-without-environment-variables)
    - [Using With Default Environment Variables](#using-with-default-environment-variables)
    - [Using With Custom Environment Variables](#using-with-custom-environment-variables)



# useFetch

Accepts an URL to fetch http resource, then returns data as json.

Let's take a look at the notation of useFetch

```ts
export default function useFetch(url: string,
                                 env: string = 'REACT_APP_API'): [any[], Boolean, any];
```

### Using Without Environment Variables


```jsx
import { useFetch } from "kanca/http";


const Application = () => {
    const [data, loading, err] = useFetch('https://jsonplaceholder.typicode.com/todos/1', null);

    return (
        <li>
            {JSON.stringify(data)}
        </li>
    );
}
```

### Using With Default Environment Variables

For react apps suggested default environment variable is: `REACT_APP_API` and kanca uses it.

Go your root dir and modify `.env` files;

.env.development

```env
REACT_APP_API=https://jsonplaceholder.typicode.com
```


```jsx
import { useFetch } from "kanca/http";


const Application = () => {
    const [data, loading, err] = useFetch('/todos/1');

    /**
     * This statement is actually equal to 
     * https://jsonplaceholder.typicode.com/todos/1
     * */

    return (
        <li>
            {JSON.stringify(data)}
        </li>
    )
}
```

### Using With Custom Environment Variables

.env.development

```env
REACT_APP_API=https://jsonplaceholder.typicode.com
REACT_APP_JSON_POST=https://jsonplaceholder.typicode.com/posts/
```

```jsx
import { useFetch } from "kanca/http";


const Application = () => {
    const [data, loading, err] = useFetch('/3', 'REACT_APP_JSON_POST');

    /**
     * This statement is actually equal to 
     * https://jsonplaceholder.typicode.com/posts/3
     * */

    return (
        <li>
            {JSON.stringify(data)}
        </li>
    )
}
```