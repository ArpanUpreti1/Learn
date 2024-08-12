// Maps Stores only unique value
const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('CN',"Canada")

for (const [key, value] of map) {
    // console.log(key,':-',value);
}

//In object it is not itriable
// for (const [key , value] of obj) {
//     console.log(key,':-',value);
// }

const obj = {
    game1 : 'Valorant',
    game2 : 'Spiderman',
}

for (const key in obj) {
    // console.log(obj[key]);
}

// const programming = ["Java","JavaScript","CPP"]
// for (const key in programming) {
//    console.log(programming[key]);
// }

//For Each Loop
const coding = ["JS","java","py","ruby","cpp","C#"]
// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName : "Java Script",
        languageFile : ".js"
    },
    {
        languageName : "Java",
        languageFile : ".java"
    },
    {

    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFile);
})  