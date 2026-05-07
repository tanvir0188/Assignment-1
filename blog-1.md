# Why choose 'unkown' instead of 'any'

The unkonwn type can be considered as the type safe version for data type that is literally unkown to us. Because it forces us to inspect the data type and then  handle accordingly. 
Let's see with an example  how 'any' type data compromises type safety.

```
var value:any  = 'aasdfas'
```
Here value is 'any' type means we  will  be able to use any kind of method with value.

```
console.log(Math.sqrt(value))
```
This snippet of code should be giving run time error, but since we stated that value can be 'any' type it does not give any kind of error. Had we used 'unknown' type, typescript would not have allowed it. Hence we achieve type safety.

### Type narrowing
To use 'unknown' type variables, we get introduced to another concept which is type narrowing. Which means we need to make sure that the 'unknown' type value  is using appropriate methods and operations based on its actual type. To narrow down the types of our 'unknown' variable, we can use conditional statements. For example.

```
if (typeof value === "string"){
    use methods that can manipulate string only 
}
else if (typeof value === 'number'){
    use methods that is appropriate for numbers only.
}
```
