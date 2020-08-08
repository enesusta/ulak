
## Index

Are u tired to write the same handlers again and again?

# useObject

Accepts an object to create various custom handlers then returns state of object and handlers of that object.

Let's take a look at the notation of useObject

```ts
export default function useObject(initial: any);
```

## What is the difference between the traditional way to handle forms and useObject hook?

To better understand what useObject hook does we'll examine the old way which handles to react forms.

### Old way, without useObject hook

```jsx
import React, {useState} from 'react';

const initialObject = {
    author: "",
    isbn: "",
    title: "",
    language: "",
    pages: "",
    price: ""
}

const FormOld = () => {
    const [book, setBook] = useState(initialObject);

    const authorHandler = e => {
        setBook({...book, author: e.target.value});
    };

    const isbnHandler = e => {
        setBook({...book, isbn: e.target.value});
    };

    const titleHandler = e => {
        setBook({...book, title: e.target.value});
    };

    const languageHandler = e => {
        setBook({...book, language: e.target.value});
    };

    const pagesHandler = e => {
        setBook({...book, pages: e.target.value});
    };

    const priceHandler = e => {
        setBook({...book, price: e.target.value});
    };

    return (
        <section>
            <h3>Login</h3>
            <form>
                <label> Author </label>
                <input type="text" value={book.author} onChange={authorHandler} />
                <label> ISBN </label>
                <input type="text" value={book.isbn} onChange={isbnHandler} />
                <label> Title </label>
                <input type="text" value={book.title} onChange={titleHandler} />
                <label> Language </label>
                <input type="text" value={book.language} onChange={languageHandler} />
                <label> Pages </label>
                <input type="text" value={book.pages} onChange={pagesHandler} />
                <label> Pages </label>
                <input type="text" value={book.price} onChange={priceHandler} />
            </form>
        </section>
    )
};

export default FormOld;
```

### With useObject hook

We don't have to write custom handlers for each field of the object. useObject creates custom handlers for us. Much cleaner and easier, right?

```jsx
import React from 'react';
import { useObject } from "kanca/form";

const initialObject = {
    author: "",
    isbn: "",
    title: "",
    language: "",
    pages: "",
    price: ""
}

const Form = () => {
    const [book, bookHandlers] = useObject(initialObject);
  //  const [book, bookHandlers] = useObject({author: "", isbn: "", title: "", language: "", pages: "", price: ""})

/**
 * both are valid.
 * 
 * */

    return (
        <section>
            <h3>Login</h3>
            <form>
                <label> Author </label>
                <input type="text" value={book.author} onChange={e => bookHandlers[0](e.target.value)} />
                <label> ISBN </label>
                <input type="text" value={book.isbn} onChange={e => bookHandlers[1](e.target.value)} />
                <label> Title </label>
                <input type="text" value={book.title} onChange={e => bookHandlers[2](e.target.value)} />
                <label> Language </label>
                <input type="text" value={book.language} onChange={e => bookHandlers[3](e.target.value)} />
                <label> Pages </label>
                <input type="text" value={book.pages} onChange={e => bookHandlers[4](e.target.value)} />
                <label> Pages </label>
                <input type="text" value={book.price} onChange={e => bookHandlers[5](e.target.value)} />
            </form>
        </section>
    )
}

export default Form;
```

Here is a simple diagram to understand how useObject hook works.

<div align="center">

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/kanca/useobject-1.png)

</div>