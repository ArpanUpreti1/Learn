// const lang = ["js","java","python","ruby"]


// const values =  lang.forEach((item)=>{
//    // console.log(item);
//     return item
// })
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8]
// const filteredValue =  myNums.filter( (num)=> num > 4 )
// console.log(filteredValue);

// const newNums = []
// myNums.forEach( (num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const myNums = [1,2,3,4,5,6,7,8]
// const newNums =  myNums.map((num)=> num + 10 );
const newNums = myNums
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40 )



console.log(newNums);