function Setusername(username){
    this.username = username
    console.log("Called");
    
}
function createUser(username, email, password){
    Setusername.call(this,username)
    this.email = email;
    this.password = password

}
const arpan = new createUser("Arpan","asss@gmail.com",123)
console.log(arpan);
