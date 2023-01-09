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
