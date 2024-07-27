// const jsonNames = `["Arpan","Aayush","Bro code","Jenish"]`;
// const jsonPerson = ` {
//     "name":"Arpan",
//     "age" : 10,
//     "isStudent" : true
// }`
// const parsedData = JSON.parse(jsonNames);
// console.log(parsedData)
fetch("people.json")
.then(response =>response.json())
.then(value =>{console.log(value)})