// JAVASCRIPT ASYNC

//Synchronous

/*
console.log("Start")

for(let i = 0; i <1000000; i++); {
   // console.log(i);
}
console.log("End");

*/

//Asynchronous


console.log("Start");

setTimeout(()=>{
    console.log("Inside Timeout");
},20);

console.log("End");

// A promise represents a value that may be...
//resolved (success)
//rejected (failure)
//pending (waiting)

//Basic Promise Example

let myPromise = new Promise(function(resolve,reject){
    let success = true;

    if (success){
        resolve("Task is completed");
    }
    else{
        reject("Task failed");
    }
});

myPromise   
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });

//Timed Promise (Using setTimeout)

function delayedTask(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Data recieved after 3 seconds");
        }, 3000);
    });
}

delayedTask().then (function(data){
    console.log(data);
});

//Basic Fetch Example

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("error", error);
    });

//Fetch and Render (Display on Page)

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then (response => response.json())
    .then(data =>{
        document.getElementById("output").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>`;
    })
.catch(error=> console.log(error));

