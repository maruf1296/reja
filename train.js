console.log("train task ishga tushdi!");

//TASK-F
function KARON(str) {
  let mar = str.split("");
  for (let yu = 0; yu < mar.length; yu++) {
    if (mar.indexOf(mar[yu]) !== yu) {
      return true;
    }
  }
   return false;
}
 console.log(KARON("Muzaffar"));
 
/*
Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi.
Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

// // TASK-E
// function Karon(ini) {
//     const stx = ini.split("").reverse().join(" ");
//     console.log(stx)
// }
// Karon("Uzbekiston");


/*
Shunday function tuzing, u bitta string argumentni qabul qilib osha
stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/


 //TASK-D
// function checkContent(stax1, stax2) {
  
//     let xats1 = stax1.split("").sort().join("");
//     let xats2 = stax2.split("").sort().join("");
//     console.log(xats1 === xats2); 
// }
//     checkContent("mitgroup", "mitgropu");  


// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.



// // TASK-C
// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.tovarlar = { non, lagmon, cola };
//   }

//   getTime() {
//     return moment().format("HH:mm");
//   }

//   qoldiq() {
//     const { non, lagmon, cola } = this.tovarlar;
//     console.log(`Hozir ${this.getTime()}da ${non}ta non, ${lagmon}ta lag'mon, ${cola}ta cola bor`);
//   }

//   sotish(nomi, soni) {
//     const bor = this.tovarlar[nomi];
//     if (bor == undefined)
//       return console.log(`Hozirda ${nomi} degan mahsulot yo'q.`);
//     if (bor < soni)
//       return console.log(`Hozirda yetarli ${nomi} yo'q. Faqat ${bor}ta bor.`);
//     this.tovarlar[nomi] -= soni;
//     console.log( `${soni}ta ${nomi} sotildi.`);
//   }

//   qabul(nomi, soni) {
//     if (this.tovarlar[nomi] == undefined)
//       return console.log(`Hozi:  ${nomi} degan mahsulot yo'q.`);
//     this.tovarlar[nomi] += soni;
//     console.log(`Yana ${soni}ta ${nomi} qabul qilindi.`);
//   }
// }
// const shop = new Shop(10, 5, 8);
// shop.qoldiq();
// shop.sotish("non", 8);
// shop.sotish("non", 4);

// shop.qoldiq();

// //TASK-A
// // function bambboo(e, element) {
// //   let javob = element.split("");
// //   let javob1 = javob.filter((q) => q === e);
// //   console.log(`${element} ning ichida ${javob1.length} ta ${e} bor`);
// // }
// // bambboo("b", "bambboo");

// //=====================================================

// //TASK-B
// function stex(bob) {
//   console.log(typeof bob);
//   const result = bob.split("");
//   console.log(typeof result);
//   const lastResult = result.filter((ele) => {
//     return ele >= 0 ? ele: null;
//   });
//   console.log(lastResult);
// }

// stex("ad2a54y79wet0sfgb9");


// // =================================================
// console.log("Jck Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling",
//   "togri boshliq tanlang va koproq hato qiling",
//   "uzingizga ishlashingizni boshlang",
//   "siz kuchli bolgan narsalarni qiling",
//   "yoshlarga investitsiya qiling",
//   "endi dam oling, foydasi yoq",
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("raqam kiriting", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatlariBering(2, (err, data) => {
//   if (err) console.log("error:", err);
// //   console.log("javob:", data);
// // });

// // =================================================
// console.log("Jck Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling",
//   "togri boshliq tanlang va koproq hato qiling",
//   "uzingizga ishlashingizni boshlang",
//   "siz kuchli bolgan narsalarni qiling",
//   "yoshlarga investitsiya qiling",
//   "endi dam oling, foydasi yoq",
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("raqam kiriting");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       },5000);
//     });
//   }
// }


    // setTimeout (fubction (){
    //  return list[5];
    // },5000);
  

//then/catch
// console.log("passed here 0");
// maslahatBering(89).
//    then(data => {
//          console.log("javob:", data);
// }).catch(err => {
//          console.log("ERROR:", err);
// })
// console.log("passed here 1");


// // asyn/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// console.log("===== PRACTICE =====");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// // CALL
// qoldiqliBolish(10, 2, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }
// });

// -
