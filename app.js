const express = require('express');
const path = require('path')
const port = 8081;
const app = express();

//app.use(express.static('./dist'))
app.use(express.static('../../../../Projects/Web/Lerato/Aj-Lee-Clothing/angular/aj-lee-clothing/dist/aj-lee-clothing'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html',__dirname)
});

app.listen(port, () => {
    console.log("Server is listening on port "+port);
});