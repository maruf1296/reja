console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //expressning app objecti app orqali server quriladi
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
app.use(express.json()); //kirib kelayotgan json formatdagi data ni objectga o'girib beradi
app.use(express.urlencoded({ extended: true })); //HTML forumdan keladigan data ni express ga o'qishga yordam beradi u bo'lmasa o'qimedi

//2: Session kodlar

//3: Viewe kodlar
app.set("views", "views");      //backentda frontend yasashda ishlatiladi (Tradishional)
app.set("view engine", "ejs");  //ejs dan foydalanamiz (folder)

//4: Routing kodlar
//CREATE AIP
app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
   res.json(data.ops[0]);
  });
});
             //delete-item
             //DELETA AIP
app.post("/delete-item", (req, res) => {
const id = req.body.id;
db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
  res.json({state: "success"});
})
});
             //edit-item
             //EDIT AIP
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
                //delete-all
                //DELETE ALL AIP
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
