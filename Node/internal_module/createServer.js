const http = require('http');
const fs = require('fs/promisesd');

// Read file asynchronously instead of synchronously
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    startServer(data);
});

function startServer(data) {
    // Create server with callback function
    const app = http.createServer((req, res) => {
        console.log(req.url);

        // HTML and card templates with placeholders
        const htmlTemplate = `
        <!doctype html>
        <head>
        </head>
        <body>
        __PRODUCTS__CARDS
        </body>
        </html>
        `;

        const cardTemplate = `
        <div class="product-card">
        <h4>__Title__</h4>
        <p>__INFO__</p>
        </div>
        `;

        // Replace placeholders with actual data
        const card1 = cardTemplate.replace('__Title__', 'NAYA_MOBILE')
                                  .replace('__INFO__', 'yaaay');
        const page = htmlTemplate.replace('__PRODUCTS__CARDS', card1 + card1);

        // Write response headers
        res.writeHead(200, {
            'content-type': 'text/html',
        });

        // End response with HTML page
        res.end(page);
    });

    // Start server listening on port 1400
    app.listen(1400, () => {
        console.log("Server Started");
    });
}
