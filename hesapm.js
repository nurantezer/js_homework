// const s1 = Number(prompt("1. sayiyi giriniz:")); 
// const islem = prompt("islemi giriniz:+, -, *, /")
// const s2 = Number(prompt("2. sayiyi giriniz:"))

// let sonuc;
// if(islem=="+"){
//   sonuc= s1+s2;
// }else if(islem=="-"){
//    sonuc = s1 - s2;
// }else if(islem=="*"){
//     sonuc = s1 * s2;
// }else if(islem=="/"){
//     sonuc = s1 / s2;
// }else{
//     // console.log(`gecersiz islem girdiniz`);
//     sonuc = "bir garip"
// }
// console.log(`Sonuc: ${sonuc}`);

const num1 = Number(prompt("First Number"))
let operator = prompt("Operator: +,-,*,/")
const num2 = Number(prompt("Secont Number:"))
let result = 0
if (operator === "+"){
    result = num1 + num2
}else if (operator === "-"){
    result = num1 - num2
}else if (operator === "*"){
    result = num1*num2
}else if (operator === "/"){
    result = num1/num2
}else{
    console.log("Incorrect operator selection");
    operator = null // Yanlıs operatör girilirse operatöre null atıyor.
}
 if(operator){
    //Eger operator truty bir değer ise sonucu göster, Null gibi falsy ise gösterme
    console.log(`${num1} ${operator} ${num2} = ${result}`);
 }

