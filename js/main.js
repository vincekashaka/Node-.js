// const fetchPromisse = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromisse);

// fetchPromisse.then (res => {
//     console.log(`Received response: ${res.status}`);
// });

// console.log("Status request...");




// const fetchPromisse = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
 

// fetchPromisse.then (res => {
//     const jsonPromise = res.json();
//     jsonPromise.then(json => {

//         console.log(json[0].name);
//     })
// });
 

//Promise Chaining

// const fetchPromisse = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
 

// fetchPromisse.then (res => { 
//     if(!res.ok){
//         throw new Error (`HTTP error: ${res.status}`);
//     }
//      return res.json();
    
//     })
//     .then(json => {
//         console.log(json[0].name);
// });
 

//Catching Errors

const fetchPromisse = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
 

fetchPromisse.then (res => { 
    if(!res.ok){
        throw new Error (`HTTP error: ${res.status}`);
    }
     return res.json();
    
    })
    .then(json => {
        console.log(json[0].name);
})
.catch(error => {
    console.loG(`Could not get products: ${error}`);
})

//Combinging Multiple Promises
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
Promise.all([fetchPromise1,  fetchPromise3])
    .then(responses => {
        for(const response of responses){
            console.log(`${response.url} :${response.status}`);
        }
    })
    .catch(error => {
        console.log(`Failed to fetch: ${error}`)
    });