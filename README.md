It validates whether a string (single / multiple separated by spaces) is a valid tailwind css class or not.

### Usage

```js
// index.ts
import { isValidTailwindClass } = from'@jyotirmay/tailwind-class-validator';

(async ()=>{
    let res = await isValidTailwindClass("text-red-500", { /** Options */ })
    console.log(res);

    // Example options

    let opts = { 
        plugins:{ 
            typography: true // For tailwind-typography support
        }, 
        outputClass: "out" // to modify classname in `res.css`. The default is "cls" 
    }

    res = await isValidTailwindClass("text-red-500", opts)
    console.log(res);
})()

```