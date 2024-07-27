function walkDog(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            
            const dogWalked = false;
            if(dogWalked){
                resolve("You walk the dog")
            }
            else{
                reject("You didnt walked the dog")
            }

        },2500)
    })
    
    
}

function cleanKitchen(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            const clean = true;
            if(clean){
                resolve("You Cleaned")
            }
            else{
                reject("You didnt Clened")
            }
           

        },2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const trash = true;
            if(trash){
                resolve("You took the trash")
            }
            else{
                reject("You didnt took the trash")
            }
         
            
        },1000)
    })
}

async function doJob(){
    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult)
    const cleanKitchenResult = await cleanKitchen()
    console.log(cleanKitchenResult)
    const trashResult = await takeOutTrash()
    console.log(trashResult)

    console.log("Good job boy!!!!")
    }
    catch(error){
        console.error(error)
    }
    
}
doJob()
// walkDog().then(value=>{console.log(value);return cleanKitchen()}).then(value=>{console.log(value);return takeOutTrash()})
// .then(value=>{console.log(value);console.log("You finished the task good job!!")}).catch(error=>console.log(error));


// CallBack hell
// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("You finished the job")
//         })
//     })
// })


// Async 