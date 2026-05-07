# Usage of generics to build reusable functions and components without compromising type safety.


In typescript generics allow us to create reusable components and functions while preserving type safety regardless of the data type passed in when we want the function or component to work with multiple data types

Let's see an example where generics will shine for reusability.
```
var numbers:number[] = [1, 2, 3, 4, 5]
type User = {name:string, age:number}
var userList:User[] = [{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}]

```
Here we can see each time we are defining the type that is telling the compiler that numbers is array of numbers, or userList is array of user objects.
In big systems, we will need to repeat these thing again and again which will not allow us to maintain 'DRY' principle.

The solution is using generic type which allows us to create reusable component. For our case we can create a generic component GenericArray which will take any type of data and ensure that it is an array of the specified type.

```
type GenericArray<T> = Array<T>
var genericNumbers:GenericArray<number> = [1, 2, 3, 4, 5]
var genericUsers:GenericArray<User> = [{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}]
```
Now our compiler knows that if we are to use GenericArray and pass a type argument than the varialble type will be list of the given parameter type variable.


Generics particularly shines in  functions when we are not sure about the type of the data that will get passed as  parameter in  the function or be returned from the function.

Here is an example if we do not use generics in function.

```
function identity(arg: any): any {
  return arg;
}
```

But this way  we loose  the information about the data type which compromises type safety.

Here's an implentation with generics in such cases,

```
function identity<T>(arg: T): T {
  return arg;
}
```
Now the compiler knows that the function accepts and returns the same type.