//*Soru-1) 1000 ile 2000 arasındaki 13 e bölümünden 3 kalanı veren sayıları
//*konsola yazdırınız

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 === 3) {
//     console.log(i);
//   }
// }

//*Soru-2) Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız.

// let sayac = 0;
// let sum = 0;
// while (sayac < 5) {
//   const sayi = +prompt("bir sayi giriniz");
//   sum += sayi;
//   sayac++;
// }
// console.log(sum / 5);

//*Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar
//*toplayan ve konsola yazdıran kodu yazınız.

// let sum = 0;
// let flag = true;

// while (flag) {
//   const sayi = +prompt("bir sayi giriniz");
//   if (sayi < 0) {
//     flag = false;
//   } else {
//     sum += sayi;
//   }
// }
// console.log(sum);

//* Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir
//*Ancak 3'ün katlarına gelince "fizz", 5'in katlarına gelince "buzz"
//*Hem 3'ün hemde 5'in katlarına gelince "fizzbuzz" yazdırmanız istenmektedir.

// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

//*Soru -5 bir sayının (number) basamak sayısını yazdıran kodu yazınız.

// let sayi = 123456789;
// let basamak = 0;

// while (true) {
//   sayi = Math.floor(sayi / 10);
//   basamak++;
//   if (sayi === 0) {
//     break;
//   }
// }
// console.log(basamak);

let result = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
