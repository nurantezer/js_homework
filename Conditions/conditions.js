// const yaş=18;
// if(yaş<18){
//     console.log("çocuk");
// } else{
//     console.log("yetişkin");
// }
// const yas=18;
// let sonuç;
// if (yas<=3){
//     sonuç="bebek";
// }else if(yas<14){
//     sonuç="çocuk";
// }else if(yas<18){
//     sonuç="ergen"
// }else{
//     sonuç="yetişkin"
// }
// console.log(sonuç);

// const num=prompt("please enter a number:")
//  if (num>0){
//     console.log(`${num} is positive`);
//  }else if(num<0){
//     console.log(`${num} is negative`);
//  }else{
//     console.log(`${num} is equal to zero`);
//  }
//  const n1=+prompt("Number1:")
//  const n2=+prompt("Number2:")
//  const n3=+prompt("Number3:")
//  //1.yöntem
//  if(n1>=n2 && n1>=n3){
//     console.log(`${n1} is biggest`);
//  }else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} is biggest`);
//  }else if(n3>=n1 && n3>=n2){
//     console.log(`${n3} is biggest`);
//  }
//  //2.yöntem
//  let biggest= n1
//  if(n2>=biggest){
//     biggest=n2
//  }
//  if(n3>=biggest){
//     biggest=n3
//  }
//  console.log(`${biggest} is biggest`);
//  //3.yöntem hazır fonksiyon kullanmak
//  console.log(`The Biggest:${Math.max(n1,n2,n3)}`);

//  const year=11
//  const kidsCount=3
//  const graduate=true
//  const langCount=5
//   const increase=
//   year>=10 && kidsCount>=2 && graduate==true && langCount>=2
// //   if(increase===true){
// //     console.log("He or she deserves an increased salary");
// //   }

//   if(increase){
//     console.log("He or she deserves an increased salary");
//   }
//   console.log("***** 4 Islem Hesap Makinesi******** ");
//   const s1=Number(prompt("1.Sayiyi Giriniz:"))
//   const islem=prompt("Islemi giriniz:+,-,*,/")
//   const s2=+prompt("2.sayiyi Giriniz:")

//   let sonuc=0
//   switch (islem) {
//     case "+":
//         sonuc=s1+s2
        
//         break;
//     case "-":
//         sonuc=s1-s2
        
//         break;
//     case "*":
//         sonuc=s1*s2
        
//         break;
//     case "/":
//         sonuc=s1/s2
//         break;
//     default:
//         alert:("yanlis islem girisi")
//         break;
//   }
//   console.log(`${s1} ${islem} ${s2} =  ${sonuc}`);
//                         //    Tennary
//  const grade= +prompt("please enter your grade?")
//  const result= grade >=50 ? "Succesful" : "Failed"
//   console.log(`${result} with ${grade}`);

// //   const result= grade>=50 ? `You are succesful with${grade}` : `You are failed with${grade}`
// //   console.log(result);

// const gender="male"
// const age=20
// const healty=true
// const status="teacher"


// age >=18 && gender==="male" && healty===true && status 
// !== "student" ? alert("military servis is required") : alert("military service is not required")

// const s1 = Number(prompt("Sayi giriniz:"));
// const islem = prompt("İslemi giriniz:+,-,/,*");
// const s2 = Number(prompt("Sayı giriniz:"));

//  let sonuc = 0
// if(islem === "+"){
//     sonuc = s1+s2
// }else if(islem ==="-"){
//     sonuc = s1-s2
// }else if(islem === "*"){
//     sonuc = s1*s2
// }else if(islem === "/"){
//     sonuc = s1/s2
// }else{
//     sonuc = "Yanlis işlem girdiniz."
// }
// console.log(`Sonuc: ${sonuc}`);



// const gün = prompt("gün giriniz:");

// let sonuc;
// switch (gün) { 
//     case "pazartesi" || "sali" || "çarşamba" || "perşembe" :
//         sonuc = "Inclass";
//         break;
//     case "cuma":
//         sonuc = "Teamwork";
//     case "cumartesi":
//         sonuc = "Inclass + Workshop";
//         break;
//     case "pazar":
//         sonuc = "self-study";
//         break;
//     default:
//         alert("yalnıs gün girildi");
//         break;
// }
// console.log(sonuc);

// let maas = prompt("maasinizi giriniz");
// const asgariUcret = 5600

// if(maas < asgariUcret){
//     maas = maas*1.5
// }else if(maas > asgariUcret){
//     maas = maas*1.1
// }
// console.log(Math.floor(maas));

const gelir = prompt("gelirinizi giriniz");
const gider = prompt("giderinizi giriniz");
const asgariÜcret = 5600

const sonuc = gelir-gider >= asgariÜcret ? "Kredi verilebilir🤑" : "Kredi verilemez"
console.log(sonuc);



