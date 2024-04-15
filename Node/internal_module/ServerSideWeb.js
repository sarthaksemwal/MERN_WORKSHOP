const http = require('http');
const fs = require('fs');
const url=require('url')
const data = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/data/Newdata.json', 'utf8');
const aboutPage = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/about.html', {encoding: 'utf8'});

const htmlTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/page.html', {encoding: 'utf8'});
const cardTemplate = fs.readFileSync('D:/programming/MERN_WORKSHOP/Node/internal_module/templates/card.html', 'utf8');

const products = JSON.parse(data).products;

const allCards = products.map((elem, idx)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__', elem.title);
    newCard = newCard.replace('__IMAGE_URL__', elem.thumbnail);
    newCard = newCard.replace('__INFO__', elem.description);
    newCard = newCard.replace('__product-link__',`/newprod?id=${idx}`);
    
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
    else if(pathname==='/product'){
        const id=q.id
        const item=products[id]
        res.end(item.title);
    
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