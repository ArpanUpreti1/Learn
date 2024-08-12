//ES6 
class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPawword(){
        return `${this.password}xyz`
    }
    upperUser(){
        return `${this.username.toUpperCase()}`
    }
}
const arpan = new User("Arpan","abc@gmail.com",123)
console.log(arpan.encryptPawword());
console.log(arpan.upperUser());
// BTS
function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User1.prototype.encryptPawword = function(){
      return `${this.password}xyz`
}
const aayush = new User1("Tea","tea@gmail.com",1234)
console.log(aayush.encryptPawword());

