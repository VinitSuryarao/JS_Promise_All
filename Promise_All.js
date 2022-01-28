

    // Promise 1
    let P1 = new Promise(function(resolve, reject){
        if(1==1){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    });

    // Promise 2
    let P2 = new Promise(function(resolve, reject){
        if(2==2){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    });

    // Promise 3
    let P3 = new Promise(function(resolve, reject){
        if(2==3){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    });


// Call Promise All
// If all promises success then seccess
// If any of promises failed then entire promise failed
Promise.all([P1,P2,P3]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});