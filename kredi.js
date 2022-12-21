// const grade = +prompt("Please enter your grade:?");
// const result = grade >= 50 ? `You are succesful with ${grade}` : `You are failed with ${grade}`;

// console.log(result);

// console.log("**************Kredi Risk Programı**********");

// const asgariUcret = 5600
// const gelir = prompt("gelirinizi giriniz");
// const gider = prompt("giderinizi giriniz");

// const sonuc = gelir-gider >= asgariUcret ? "Kredi verilebilir🤑" : "Kredi verilemez😔"
// console.log(sonuc);

const income = Number(prompt("Your Income:"))
const outcome = Number(prompt("Your Outcome:"))
const credibility = 
income - outcome >= 5500 ? "LOAN AVAIBLE🤑" : "LOAN NOT AVALAIBLE😔"
console.log(credibility);