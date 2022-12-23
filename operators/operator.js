const ekmek=2;
const yumurta=30;
const peynir=40;
const toplamHarcama=ekmek+peynir+yumurta;
console.log("HARCAMA:" + toplamHarcama +" TL");

const ad="Mustafa";
const soyAd="Çalışkan";
console.log(ad+ soyAd);
console.log(ad+" "+soyAd);

const x=5;
const y="5"
const birleştir=x+y
console.log(birleştir);

console.log(`HARCAMA:${toplamHarcama} TL`);

const yıl=2021;
const dogumTarihi=1980;
const yaş=yıl-dogumTarihi;
console.log("YAŞ:" + yaş);
console.log(`YAŞ:${(yaş)}`);
console.log("YAŞ:" + (yıl-dogumTarihi));

const pi=3.14;
const r=3;
const alan=pi*r*r;
const çevre=2*pi*r;
console.log(çevre,alan)
console.log(`ÇEVRE:${(çevre)} ALAN:${(alan)}`);

let a=3;
let b=++a;
let c=--a;
console.log(a,b,c);
a+=5
console.log(a);
// const2=3
// letk=z++
// Hata:const değişkenin değeri arttırılamaz.

const sayı=123;
console.log("Birler Basamağı:" +sayı%10);

const s1=5;

console.log(s1==5);
console.log(s1=="5");
console.log(s1==="5");

console.log(s1 !==5);
console.log(s1 !="5");
console.log(s1 !=="5");
//  && Mantıksal ve işlemi gerçekleştirir.Kontrol ettiği değişkenlerin tamamı true 
// ise true değer döndürür.Aksi taktirde false değeri döndürür.
//  || Mantıksal veya işlemi gerçekleştirir.Kontrol ettiği değişkenlerin 
// sadece bir tanesi bile true ise true değer döndürür.Ancak tamamı false ise false değer döndürür.
// "!"" Mantıksal değil işlemi gerçekleştir.Yani, kontrol ettiği değişkenin değerinin 
// tersini döndürür.Değişken true ise false, false ise true değer

let s2=true;
let s3=true;
console.log(s2&&true);
console.log(s2&&s3);
console.log(s2&&s3&&false);

s3=false;
console.log(s2||s3||false);

s3=null;
console.log(s2&&s3);
console.log(s2||s3);

s2="kuş"
s3="kedi"
console.log(s2||s3);
// !Önemli:Veya işleminde ilk true değerini bulması yeterlidir. 
// !Diğerlerinin kontrolüne gerek yoktur. Bu yüzden,ilk değişkenin değerini döndürür.
console.log(s2&&s3);
// !Önemli: Ve işleminde ise en sona kadar kontrol edilmesi gerekir. 
// !Dolayısıyla, hepsi doğru ise en sondaki değişkenin değeri döndürülür.

s2=true;
s3=false;
console.log(!s2);
console.log(!s3);

s3=null;
console.log(!s3);
const v1=true;
const v2=false;

console.log(v1&&v2);
console.log(v1||v2);
console.log(!v1);

const age=prompt("Please enter your age:")
const healty=confirm("are you healty?")
console.log(age,healty);

if(age >=18 && healty==true){
    console.log("Ehliyet alabilir");
}else{
    console.log("ehliyet alamaz");
}
//!Javascripte sürekli falsy olan 6 deger bulunmaktadır.
const nal=null
const tanımsız=undefined
const boş=""
const sayıDegil=NaN
const sıfır=0
const falsy=false

console.log(Boolean(0))
console.log(Boolean(5))
console.log(Boolean(-5))
console.log(Boolean(12.4))

console.log(v1&&null&&true&&true); //nul
console.log(v1&&4&&true&&5); //5
console.log(0||v1); //0
console.log(v1||0); //true v1=true

const num5=0
if(num5===true){
    console.log("sayi sifir degildir");
}else{
console.log("sayi sifirdir");
}

// tip dönüşümleri
const dolar="1000"
const tl="500"

const tatalMoney= Number(dolar)+Number(tl)
const totalMoney1= +dolar + +tl
const totalMoney2= parseInt(dolar)+parseInt(tl)
const totalMoney3= parseFloat(dolar)+parseFloat(tl)
console.log(totalMoney3);

console.log(Number(null));//0
console.log(Number(""));//0
console.log(Number("12.3"));//12.3
console.log(Number("1ab"));//Nan
console.log(Number("0b101"));//5("binary sayı sistemi")
console.log(Number("0x10"));//16 (hex sayı sistemi)
console.log(Number(55));