// server.js
// where your node app starts

// init networkInerfaces
const { networkInterfaces } = require("os");
const nets = networkInterfaces();

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Who Am I API
const ip = () => {
  for (name of Object.keys(nets)) {
    for (net of nets[name]) {
      if (!net.internal && net.family === "IPv4") {
        return net.address;
      }
    }
  }
};

app.get("/api/whoami", function (req, res) {
  const language = req.header("Accept-Language");
  const software = req.header("User-Agent");
  res.json({
    ip: ip(),
    language,
    software,
  });
});

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

// in dev:
const port = 5000;
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
