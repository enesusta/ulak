# useFetch

Accepts an URL to fetch http resource, then returns data as json.

Let's take a look at the notation of useFetch

```ts
export default function useFetch(url: string,
                                 isEnv: boolean | undefined,
                                 env: string)
                                 : [any[], Boolean, any];
```



### Using Without Environment Variables


```jsx
import { useFetch } from "kanca/http";


const Application = () => {
    const [data, loading, err] = useFetch('https://jsonplaceholder.typicode.com/todos/1', false, null);

    return (
        <li>
            {JSON.stringify(data)}
        </li>
    );
}
```
