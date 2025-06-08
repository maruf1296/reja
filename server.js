console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/use.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//1: Krish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session kodlar

//3: Viewe kodlar
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing kodlar
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: yellow">HELLO WORLD by Maruf</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovgalar sahifasidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
console.log(req.body);
res.json({test: "success"});
});

app.get("/author",(req, res) => {
  res.render("author", {user: user});
});

app.get("/", function(req, res) {
res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
