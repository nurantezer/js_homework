// //**************** SWITCH-CASE *******************

// console.log("-------------------------------------");
// console.log(" ***** 4 Islem Hesap Makinasi ****** ");
// console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc = 0;

// switch (islem) {
//   case "+":
//     sonuc = s1 + s2;
//     break;
//   case "-":
//     sonuc = s1 - s2;
//     break;
//   case "*":
//     sonuc = s1 * s2;
//     break;
//   case "/":
//     sonuc = s1 / s2;
//     break;
//   default:
//     alert("Yanlis islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const gün= prompt("Bir gün giriniz");

// let sonuc;
// switch (gün) {
//     case "pazartesi" || "salı" || "çarşamba" || "perşembe" :
//         sonuc = "InClass";
//         break;
//     case "cuma":
//         sonuc = "Teamwork";
//         break;
//     case "cumartesi":
//         sonuc = "InClass + Workshop"
//         break;
//     case "pazar":
//         sonuc = "Self-study";
//         break;
//     default: 
//         alert("yanlış gün girildi");
//         break;
// }
// console.log(sonuc);

// const num= Number(prompt("Bir sayı giriniz:"))

// let islem;

// if(num<0){
//     console.log(`${num} is negative`);
// }else if(num>0){
//     console.log(`${num} is positive`);
// }else{
//     console.log(`${num} is equal to zero`);
// }
// console.log(islem);


// const yil = 15
// const lisans = true
// const dil = 3

// const zam =
// yil >= 10 && lisans == true && dil >= 2 

// if(zam === true){
//     console.log("Zam alabilir");
// }



const day = prompt("please select a day:").toLowerCase()

switch (day) {
  case "monday":
  case "thuesday":
  case "wednesday":
  case "thursday":
    console.log("Inclass");
    break;
  case "friday":
    console.log("teamwork");
  break;
  case "saturday":
    console.log("Inclass and workshop");
  break;
  case "sunday":
    console.log(Self-study);
  break;
  default:
    console.log("Inccorrect day");
 break; 
}
