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

// 5. Bir JavaScript dizisinde yinelenen değerleri bulan bir JavaScript programı yazın.
​
// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9
​
// çözüm
function findDuplicates(arr) {
  // 1. arrayi sırala
  let sortArr = arr.sort()
  // 2. arrayi filtrele
  let filt =sortArr.filter((a, i) => a === arr[i + 1])
  // 3. arrayi stringe çevir
  return filt.join(',');
  // return arr.sort().filter((a, i) => a === arr[i + 1]).join(',');
}
​
console.log(findDuplicates([1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10,11,11,12,43,12])); // 1,2,9
​
​
​
​
​
// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.
​
// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285
​
// çözüm
function sumOfSquares(arr) {
  // 1. arrayi karelerini al
  // 2. arrayi topla
  return arr.map((a) => a * a).reduce((a, b) => a + b);
}
​
console.log(sumOfSquares([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 285
