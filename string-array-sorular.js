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
