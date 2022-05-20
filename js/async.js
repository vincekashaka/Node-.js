async function fetchProducts(){
    try{

        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await
        fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok){
            throw new Error(`HTTP error: ${reponse.status}`);

        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the JSON object or throw an error
        const json = await response.json();
        return json;
    }

    //Catch error
    catch(error ){
        console.log(`Could not get products: ${error}`);
    }
}
const jsonPromise = fetchProducts ();
jsonPromise.then((json) => console.log(json[0].name));