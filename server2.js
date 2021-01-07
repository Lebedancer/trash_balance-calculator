const express = require('express');
const path = require('path');
const app = express();
app.get('/', function(req, res) {
    console.log('9001');
    res.send('dfsdfdsfdfsdfdffsd')
});

app.listen(9001);
