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

//*Soru4-) Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız

function findVowels(str) {
  let vowels = ``;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == `a` ||
      str[i] == `e` ||
      str[i] == `ı` ||
      str[i] == `i` ||
      str[i] == `o` ||
      str[i] == `ö` ||
      str[i] == `u` ||
      str[i] == `ü`
    ) {
      vowels += str[i];
    }
  }
  return vowels;
}

console.log(findVowels(`hello world`));

//*Soru-5 Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız.

function sumOfDivisors(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfDivisors(5));

//*Soru-6 Belirli bir sayının faktöriyelini bulan fonksiyonu yazınız

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));

//*Soru-7 Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

console.log(isPrime(6));
