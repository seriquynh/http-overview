
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/status-demo', (req, res) => {
    res.status(404);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>You can change status code and text into whatever you want.</h2>');
    res.end('Please switch to inspect mode and go to network section!');
});

app.get('/content-type-demo', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/customized-header-demo', (req, res) => {
    res.setHeader('X-MY-FIRST-HEADER', 'value');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>You can add unlimited customized headers.</h2>');
    res.end('Please switch to inspect mode and go to network section!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
