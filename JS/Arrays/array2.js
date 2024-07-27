const my_heroes = ["Aropan","Me","OnlyMe"]
const dc_heroes = ["Batman","flash"]
// my_heroes.push(dc_heroes)  //Push in exsisting array
// console.log(my_heroes[3][1]);



// const newArray =  my_heroes.concat(dc_heroes)//Concat creates new array
// console.log(newArray);

const allNewHeroes = [...my_heroes,...dc_heroes] //This is a spread operator 
// console.log(allNewHeroes);

const anotherArray = [1,2,3,4,5,6,[7,8,9],10,[11,12,[13,14]]]
const usableArray = anotherArray.flat(Infinity)
// console.log(usableArray);

console.log(Array.isArray("Arpan"))
console.log(Array.from("Arpan"))  //Creates an array



