const num1= Number(prompt("sayi giriniz"));
const islem = prompt("islemi giriniz:+,-,*,/");
const num2 = Number(prompt("sayi giriniz"));

let sonuc = 0

if(islem === "+"){
    sonuc = num1 + num2
}else if(islem === "-"){
    sonuc = num1 - num2
}else if(islem === "/"){
    sonuc = num1 / num2
}else if(islem === "*"){
    sonuc = num1 * num2
}else{
   console.log("hatali işlem");
}
console.log(`${num1} ${islem} ${num2} = ${sonuc}`);