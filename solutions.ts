// #1
const filterEvenNumbers = (numbers:number[]): number[] => {
    var evenNumbers:number[] = []
    numbers.forEach(number => {
        if (number%2 ===0){
            evenNumbers.push(number)
        }
    });
    return evenNumbers
}
console.log(filterEvenNumbers([1,2,3,4,5,6]))

//#2
const reverseString = (input:string):string=>{
    var mutableValue = [...input]
    var leftIndex:number = 0
    var rightIndex:number =mutableValue.length-1
    
    

    while(leftIndex < rightIndex){
        var tempValue:string = mutableValue[leftIndex]
        mutableValue[leftIndex] = mutableValue[rightIndex]
        mutableValue[rightIndex] = tempValue
        leftIndex++
        rightIndex--

    
    }
    return mutableValue.join('')
}

console.log(reverseString('typescript'))

//#3
type stringOrNumber = string | number

const checkType  = (input:stringOrNumber):string =>{
    if (typeof input === 'string'){
        return 'String'
    }
    else if (typeof input === 'number'){
        return 'Number'
    }
    
    return 'Unknown Type'
}


//#4
const getProperty = <T> (obj:T,key: keyof T): T[keyof T] => obj[key]

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, 'name')) 
//#5
interface Book{
    title:string,
    author:string,
    publishedYear:number
}
interface BookWithReadStatus extends Book{
    isRead:boolean
}
const toggleReadStatus  = (book:Book):BookWithReadStatus=>{
    return {
        ...book,
        isRead: true
    }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));

// #6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade:string
    constructor(name:string,age:number,grade:string){
        super(name,age)
        this.grade = grade
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails())
// #7
const getIntersection = (arra1:number[],arra2:number[]):number[] =>{
    var joinedArray:number[] = [...arra1,...arra2]
    var finalSet:Set<number> = new Set(joinedArray)
    return [...finalSet]    
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))