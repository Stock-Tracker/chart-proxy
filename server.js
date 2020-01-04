require('dotenv').config();
const express = require('express');
const config = require('./env.config.js')
const PORT = config.REVERSE_PROXY_PORT;
const app = express();

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

// // TODO: how to get the ticker that's in the url to the client
// app.get('/stocks/:ticker', (req, res, next) => {
//   console.log('hi');
//   res.send('hi');
// });

app.listen(PORT, () => { console.log(`Reverse Proxy is running on port ${PORT}`)});