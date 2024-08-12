// for(let index = 0; index< 10;index++){
//     console.log(index);
// }



// for (let index = 0; index <= 10; index++) {
//     console.log(`Outer Loop ${index}`);
//     for (let i = 0; i <=10 ; i++) {
//         console.log(`Inner Loop ${i}`);
//     }   
// }
let myArray = ["Arpan","Hitesh","Ram"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (myArray[index].startsWith("H")  ) {
        //console.log(`This element includes H in first place ${myArray[index]}` );
    }
}

// Break and Continue 

for (let index = 0; index <= 10; index++) {
        if (index === 5) {
            continue;
        } 
        console.log(index);  
    
}