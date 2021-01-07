const express = require('express');
const http = require('http')
const path = require('path');
const request = require('request')
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', function(req, res) {
    request.get(
        'http://localhost:9001/',
        {
            json: {
                todo: 'Buy the milk'
            }
        },
        (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
        }
    )
});

app.listen(9000);
