// console.log("*************  maaş hesabı  ****************");

// const asgariUcret = 5600

// let maas = prompt("maasinizi giriniz");

// if(maas < asgariUcret){
//     maas = maas*1.5
// }else if(maas > asgariUcret){
//     maas = maas*1.1
// }
// console.log(Math.floor(maas));

const salary = Number(prompt("Please enter your salary"))
const minumumWage = 5500
const inceasedSalary = salary >= minumumWage ? salary *1.1 : salary *1.5
console.log(inceasedSalary);



