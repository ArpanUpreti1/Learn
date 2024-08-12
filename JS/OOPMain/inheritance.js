class User {
    constructor(username) {
        this.username = username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new was added by ${this.username}`);
        
    }
}
const teacher1 = new Teacher("Arpan","arpan@gmail.com","123")
teacher1.addCourse()
teacher1.logme()