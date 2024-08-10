const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => res.type('html').send(html));
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Progressive Web App</title>
  <link rel="stylesheet" href="/src/css/app.css">
  <link rel="manifest" href="manifest.json">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Poke App">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72-72.png" sizes="72X72">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76-76.png" sizes="76X76">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-114-114.png" sizes="114X114">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-120-120.png" sizes="120X120">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144-144.png" sizes="144X144">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152-152.png" sizes="152X152">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180-180.png" sizes="180X180">
  <meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144-144.png">
  <meta name="msapplication-TileColor" content="#fff">
</head>

<body>
  <div class="App">
    <div class="banner">
      <h2>Progressive Web<br>Application<br>Demo</h2>
    </div>
    <section>
      <input type="text " placeholder="Search for Pokemon" id="inputSearch" value="" onkeyup="filterREsults(event)">
      <!-- <input type="button" value="click me for prompt" id="promptButton" onclick="openModal()" /> -->
      <div id="card-list">
      </div>
    </section>
  </div>
  <script src="/src/js/swMethods.js"></script>
  <script src="/src/js/app.js"></script>
  <script src="/src/js/swRegistration.js"></script>
  <script src="/src/js/random.js"></script>

</body>

</html>
`