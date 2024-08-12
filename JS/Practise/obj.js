const employee = {
    "full name": "Arpan Upreti",
    age : 12,
    isPresent : false,
}
const std = {
    id : 12121,
    fee : 121212,
}
const my = Object.create(employee);
my.id = 1212
my.name = "John"
console.log(my.name);
