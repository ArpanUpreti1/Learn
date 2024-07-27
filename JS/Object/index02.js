// const fbUser = new Object() // singleton object

const fbUser = {}
fbUser.id = 123
fbUser.name = "Arpan"
fbUser.isLOggedIn = false

// console.log(fbUser);

const user = {
    email : "aaa@gmail.com",
    fullName :{
        userFullname:{
            fistName : "Arpan",
            lastName : "Upreti"
        }
    }
}
// console.log(user.fullName.userFullname.fistName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}


// const result = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email : "h@gmail.com"
    }
]
// console.log(users[0].email)

console.log(Object.keys(fbUser));
console.log(user.hasOwnProperty('id'));