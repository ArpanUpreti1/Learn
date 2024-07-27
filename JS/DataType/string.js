const name = "arpan"
const repoCount = 10
// console.log(name + repoCount );
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('arpan ap hero')
console.log(gameName[1]);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));

let newString = gameName.substring(0,4)
// console.log(newString)


// We can use negative value only in slice not in substring 
const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "    arpan   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "arpan arpan arpan"

console.log(url.replaceAll('arpan','hero'));

console.log(url.includes('arpan'))
console.log(gameName.split(' '));