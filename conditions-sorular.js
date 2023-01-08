// //*Soru-1 Bir sayının tek mi çift mi olduğunu consola yazdıran koşulu yazınız

// const sayi = 30;
// if (sayi % 2 === 0) {
//   console.log(`${sayi} bir çift sayıdır`);
// } else if (sayi % 2 === 1 || -1) {
//   console.log(`${sayi} bir tek sayıdır`);
// }

//*Soru-2 Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran
//*ternary yapııyı yazınız

const sayi = -100;
0 < sayi && sayi < 100 ? console.log(`sağlar`) : console.log(`sağlamaz`);

//*Soru-3 18 yaşından büyüklerin oy kullanabileceği 18 yaşından küçüklerin
//*oy kullanamayacağını ternary yaıi ile konsola yazdıran kodu yazınız

const yas = 17;

yas < 18 ? console.log(`oy kullanamaz`) : console.log(`oy kullanabilir`);

const cihaz = `mobil`;
const isMobile = cihaz === `mobil` ? `mobile` : `mobile değil`;
console.log(cihaz);

//*Soru-4 Artık yıl sorusu
// *Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//* Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//* Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazını

const yil = Number(prompt("Lütfen bir yıl giriniz "));

if (yil % 400 === 0) {
  console.log(`${yil} artık yıldır.`);
} else if (yil % 4 === 0 && yil % 100 !== 0) {
  console.log(`${yil} artık yıldır.`);
} else {
  console.log(`${yil} artık yıl değildir.`);
}

//*Soru-5  kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız. (2024'ün 2. ayı 29 çeker.) (20 P)

const yil = 2023;
const ay = 5;

if (ay == 2) {
  if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
    console.log(`${yil} yılını ${ay} ayı 29 çeker.`);
  } else {
    console.log(`${yil} yılını ${ay} ayı 28 çeker.`);
  }
} else if (
  ay == 1 ||
  ay == 3 ||
  ay == 5 ||
  ay == 7 ||
  ay == 8 ||
  ay == 10 ||
  ay == 12
) {
  console.log(`${yil} yılını ${ay} ayı 31 çeker.`);
} else if (ay == 4 || ay == 6 || ay == 9 || ay == 11) {
  console.log(`${yil} yılını ${ay} ayı 30 çeker.`);
}
