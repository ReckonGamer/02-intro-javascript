
// const getImagenPromesa = () =>  new Promise( resolve =>  resolve("https://google.com"));


// getImagenPromesa().then(console.log);

const getImagen = async() => { // We will make an async function.

    try { // Create an exception, to search if this works fine or not.
        const api_key = 'B4pu2vpKl9yVV2uGcotB7ReSkk6eb6HD';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

        const { data } = await resp.json();

        console.log(data);

        const { url } = data.images.original;

        console.log(url);
        const img = document.createElement("img");

        img.src = url;

        document.body.append( img );
    } catch(error) {
        console.error(error);
    }    
}

getImagen(); // Call the async function.