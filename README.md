It validates whether a string (single / multiple separated by spaces) is a valid tailwind css class or not.

### Installation

```bash
npm install @jyotirmay/tailwind-class-validator
```

### Usage

```js
// index.ts
import { isValidTailwindClass } = from'@jyotirmay/tailwind-class-validator';

(async ()=>{
    let res = await isValidTailwindClass("text-red-500", { /** Options */ })
    console.log(res);
    /*
        Output: 
        {
            success: true,
            css: '.cls {\n' +
            '    --tw-text-opacity: 1;\n' +
            '    color: rgb(239 68 68 / var(--tw-text-opacity))\n' +
            '}'
        }
    */

    // With options

    let opts = { 
        plugins:{ 
            typography: true // For tailwind-typography support
        }, 
        outputClass: "out" // to modify classname in `res.css`. The default is "cls" 
    }

    res = await isValidTailwindClass("text-red-500", opts)
    console.log(res);
    /*
        Output: 
        {
            success: true,
            css: '.out {\n' +
            '    --tw-text-opacity: 1;\n' +
            '    color: rgb(239 68 68 / var(--tw-text-opacity))\n' +
            '}'
        }
    */
})()

```