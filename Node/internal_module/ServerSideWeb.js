const http = require('http');
const fs = require('fs');
const url = require('url');

const data = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/data/Newdata.json', 'utf8');
const htmlTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/page.html', { encoding: 'utf8' });
const cardTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/card.html', 'utf8');

const inputElement = `
<form action='product'>
<input type="text" name="productname">
<input type="submit">
</form>
`;

const products = JSON.parse(data).products;

const allCards = products.map((elem, idx) => {
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__', elem.title);
    newCard = newCard.replace('__IMAGE_URL__', elem.thumbnail);
    newCard = newCard.replace('__INFO__', elem.description);
    newCard = newCard.replace('__product-link__', `/product?id=${idx}`);
    return newCard;
});

const allCardsString = allCards.join(' ');
const page = htmlTemplate.replace('__PRODUCTS__CARDS__', allCardsString);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    const path = url.parse(req.url, true);
    const pathname = path.pathname;
    const q = path.query;

    if (pathname == '/home') {
        res.end(inputElement + page);
    } else if (pathname == '/product') {
        const id = q.id;
        const pName = q.productname; // Changed parameter name to productname
        const item = products[id];

        if (pName !== undefined) { // Changed condition for checking if pName exists
            // Filtering products based on search query
            const filteredProducts = products.filter((ele) => ele.title.includes(pName));
            res.writeHead(200, { 'content-type': 'application/json' }); // Set content type to JSON
            res.end(JSON.stringify(filteredProducts)); // Return filtered products as JSON
            return; // Exit the function to avoid sending HTML response
        }

        // Moved the res.writeHead() line to the correct position
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Centered Div with Box Shadow and Border Radius</title>
            <style>
                /* CSS styles */
            </style>
            </head>
            <body>
            <h1>PRODUCT INFORMATION</h1>
                <div class="centered-div">
                    <h1>${item.title}</h1>
                    <img src="${item.images[3]}"/>
                    <h2>${item.rating}</h2>
                    <p>${item.description}</p>
                </div>
            </body> 
            </html>
        `);
    } else {
        res.end('404 not found');
    }
});

server.listen(1400, () => {
    console.log('...............Server Started!.....................');
});
