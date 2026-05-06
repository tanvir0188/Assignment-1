const filterEvenNumbers = (numbers:number[]): number[] => {
    var evenNumbers:number[] = []
    numbers.forEach(number => {
        if (number%2 ===0){
            evenNumbers.push(number)
        }
    });
    return evenNumbers
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


const reverseString = (input:string):string=>{
    var mutableValue = [...input]
    var leftIndex:number = 0
    var rightIndex:number =mutableValue.length-1
    
    

    while(leftIndex<rightIndex){
        mutableValue[leftIndex]=mutableValue[rightIndex]
        leftIndex++
        rightIndex--
    }
    return mutableValue.join(', ')
}
