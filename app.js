console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/use.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB connect chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

//1: Krish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session kodlar

//3: Viewe kodlar
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing kodlar

app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
   res.json(data.ops[0] );
  });
});

app.post("/delete-item", (req, res) => {
const id = req.body.id;
db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
  res.json({state: "success"});
})
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input} },
    function(err, data) {
      res.json({state: "success"});
    });
});

app.post("/delete-all", (req, res) => {
  if(req.body.delete_all) {
    db.collection("plans").deleteMany(function() {
      res.json({state: "hamma rejalarni o'chirmoqchimisiz?"});
    });
  }
});



app.get("/", function (req, res) {
  console.log("STEP1: READ localhost:3000 ga kirdi");

  console.log("STEP2: FRONTEND => BACKEND keldi");

  console.log("STEP3: BACKEND => DB jonadi");
  db.collection("plans")
    .find()//plans ni DB da qidiradi
    .toArray((err, data) => { //array shaklida ma'lumot keladi
  console.log("STEP4: DBda => BACKEND qaytib keladi, data olib keldi array shaklida");
      console.log("data:", data); //data => DB dan kelgan ma'lumot

      
      //reja ni ichiga items nomi bilan data ni beradi (reja.ejs ichini qara).
      console.log("STEP5: BACKEND => FRONTEND ga javob yuboradi");
        res.render("reja", { items: data });
     
    });
});

module.exports = app;
