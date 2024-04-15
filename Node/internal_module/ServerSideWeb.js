const http = require('http');
const fs = require('fs');
const url=require('url')
const data = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/data/Newdata.json', 'utf8');
const htmlTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/page.html', {encoding: 'utf8'});
const cardTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/card.html', 'utf8');
const products = JSON.parse(data).products;

const allCards = products.map((elem, idx)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__', elem.title);
    newCard = newCard.replace('__IMAGE_URL__', elem.thumbnail);
    newCard = newCard.replace('__INFO__', elem.description);
    newCard = newCard.replace('__product-link__',`/product?id=${idx}`);
    
    return newCard;
});

const allCardsString = allCards.join(' ');
const page = htmlTemplate.replace('__PRODUCTS__CARDS__',allCardsString);

const server = http.createServer((req, res)=>{
    //object destructuring
    const path=url.parse(req.url,true)
    const pathname=path.pathname;
    const q=path.query;

    if(pathname=='/home'){
        res.end(page)
    }
    else if(pathname=='/product'){
        const id=q.id
        const item=products[id]
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Centered Div with Box Shadow and Border Radius</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        
            body {
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
            }
        
            .centered-div {
                width: 300px;
                height: 300px;
                margin: 0 auto;
                background-color: #f0f0f0;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                transition: transform 0.3s ease; 
            }
        
            img {
                width: 100px;
                height: 100px;
                margin-left: 70px;
                transition: transform 0.3s ease; 
            }
        
            h1 {
                margin-left: 70px;
            }
        
            p {
                margin-top: 10px;
            }
        
            /* Add hover effect */
            .centered-div:hover {
                transform: scale(1.05); 
            }
        
            img:hover {
                transform: scale(1.1); 
            }
        
           
            h1:hover {
                color: #ff6347; 
            }
        
            p:hover {
                color: #4169e1; 
            }
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
    
    }



    else{
        res.end('404 not found')
    }

        res.writeHead(200, {'content-type': 'text/html'});
        // res.end(page);
    
});

server.listen(1400, ()=>{
    console.log('...............Server Started!.....................')
})