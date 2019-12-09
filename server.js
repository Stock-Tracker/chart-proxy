const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.static('client/dist'));
app.use(express.static('client/public'));
app.listen(() => { console.log(`Reverse Proxy is running on port ${PORT}`)});