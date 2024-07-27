// Singleton.  Using comstructor

// Object Literals
const mySym = Symbol("key1")
const user = {
  name: "Arpan",
  age: 19,
  "full name" : "Arpan Upreti",
  [mySym] : "helllo",
  Profession: "Student",
  location: "Goathgaun",
  isLoggedIn : false,
  lastLogIn : ["Monday","Saturday"]
};


// console.log(user["location"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

// Object.freeze(user)
// console.log(user.name);
// console.log(user);

user.greeting = function (){
    console.log("Hello namakar dosto!!!");
}


user.greeting2 = function (){
    console.log(`Hello namakar dosto, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());