//*1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerinin gizlemek için bir javascript
//*fonksiyonu yazınız
//*Test versisi: console.log(procect_email("robin_singh@example.com"));
//*"robin...@example.com"

let email = `robin_singh@example.com`;

function emailValidate(email) {
  let emailName = email.split(`@`)[0];
  return (
    emailName.slice(0, emailName.length - 3) + `...@` + email.split(`@`)[1]
  );
}
console.log(emailValidate(email));

//*2. Bir dizideki tüm elemanların ortalmasını hesaplayan bir javascript
//*fonksiyonu yazınız

let dizi = [1, 2, 3, 4, 5];

function average(dizi) {
  let sum = 0;
  dizi.forEach((num) => (sum += num));
  return sum / dizi.length;
}
console.log(average(dizi));

//*3. Verilen pozitif olmayan bir tam sayıyı argüman olarak lana ve rakamları
//*azalan sırada döndüren bir fonksiyon yazılmaktadır. Özetle, rakamları
//*yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun
//*example input : 42145 output : 54421

let sayi = 123456789;

function reverse(num) {
  return +num.toString().split("").sort().reverse().join("");
}
console.log(reverse(sayi));

//*4. >Verilen bir stringde sesli harfleri filtreleyin ve sadece sesli
//*harfler olmayan kalan harfleri birleştirin
//*Example ınput: "day" output :"d" "apple" "pll"

let str = "javascript";

function name(str) {
  let list = str.split(``);
  let vowels = `aeıioöuü`;
  console.log(list);

  let filt = list.filter((e) => !vowels.includes(e));
  console.log(filt);
  return filt.join("");
}
console.log(name(str));

//*5. Bir javaScrip dizisinde tekrar eden değerleri bulan bir javascript
//*programı yazınız
