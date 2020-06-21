require('dotenv').config();
const path = require('path');
const express = require('express');
const addressRoute = require('./api/route/addressRoute');

const app = express();

//url encode + json encode
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * @description fire addressRoute routes
 * @folder ./api/route/address
 * @router http://localhost:port/api/collection/
 */
addressRoute(app);

/**
 * @production start ...
 */
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    //get all request
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//create the server
const port = process.env.PORT || 2727;
app.listen(port, () => console.log(` app listening at http://localhost:${port}`));


