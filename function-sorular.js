//*Soru-1) Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız
//*(celsius*9/5)+32

function calFahrenheit(cel) {
  const fahr = cel * (9 / 5) + 32;
  return cel + ` derece` + fahr + " fahrenheit'a eşittir";
}
console.log(calFahrenheit(5));

//*Soru-2) Belirli bir string ifadenin tersini bulan fonksiyonu yazınız

function reverseString(str) {
  let str2 = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}

console.log(reverseString(`hello world`));

//*Soru3 Belirli bir string ifadenin palindrome olup olmadığını bulan
//*fonksiyonu yazınız.(Büyük, küçük harf duyarlılığı olmamalıdır)Ayna
//*etkisi ile ortadan bölmesi "selles"

const string = `seles`;

function reverseString(str) {
  let str2 = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}

const isPalindrome = function (string) {
  const reversed = reverseString(string);
  return reversed == string
    ? `${string} bir palindrome`
    : `${string} palindrome değil`;
};
console.log(isPalindrome(string));
