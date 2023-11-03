
const api_key = 'B4pu2vpKl9yVV2uGcotB7ReSkk6eb6HD'; // Paste your api-key.

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`); // Paste the link with your actual api-key.

peticion.then( resp =>  resp.json() ) // Make a petition, that it will return a JSON.
    .then(( { data } ) => { // If there is data.
        const { url } = data.images.original; // Show the original image with url.
        
        const img = document.createElement("img"); // Create a new element to show the image.
        img.src = url; // The source from the image will be the url.

        document.body.append( img ); // Add the image on the document.
    })
    .catch(console.warn);