const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete.');
        resolve()
    },1000)
});
promiseOne.then(()=>{
    console.log("Promise consumed");
})


new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2.");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({user: "Arpan",email: "arpan@.com"})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error = false;
            if (!error) {
                resolve({Username: "Arpan",password:"1234"})
            }
            else{
                reject('ERROR: Something went wrong')
            }
        },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.Username
})
.then((Username)=>{
    console.log(Username);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>console.log("Your task is done!!"))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if (!error) {
            resolve({Username: "JS",password:"1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumePromiseFive() {
       try {
        const response =  await promiseFive
        console.log(response);
       } catch (error) {
        console.log(error);
        
       }
       
}
consumePromiseFive()
async function getUsers(params) {
   try {
    const response =  await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await response.json();
   console.log(data);
   } catch (error) {
    console.log(error);
   }
   
}
getUsers()