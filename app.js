const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => res.type('html').send(html));
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const server = app.listen(port, () => console.log(`Example app listening on ports ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
