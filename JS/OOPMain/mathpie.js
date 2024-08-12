// const decs = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(decs);
// const myNewObj = Object.create()
const tea = {
    name : "ginger tea",
    price : "1000",
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(tea,"name"));
Object.defineProperty(tea,"name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(tea,"name"));