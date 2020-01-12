require('dotenv').config();
const express = require('express');
const config = require('./env.config.js')
const PORT = config.REVERSE_PROXY_PORT;
const app = express();

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.listen(PORT, () => { console.log(`Reverse Proxy is running on port ${PORT}`)});