// Reduce 
const nums = [1,2,3,4]
const sumOfNums =  nums.reduce((acc,curr)=>{
    console.log(`accu: ${acc} curr: ${curr}`);
    return acc + curr
},0)
console.log(sumOfNums);