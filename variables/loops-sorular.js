//*Soru-1) 1000 ile 2000 arasındaki 13 e bölümünden 3 kalanı veren sayıları
//*konsola yazdırınız

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 === 3) {
//     console.log(i);
//   }
// }

//*Soru-2) Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız.

let sayac = 0;
let sum = 0;
while (sayac < 5) {
  const sayi = +prompt("bir sayi giriniz");
  sum += sayi;
  sayac++;
}
console.log(sum / 5);
