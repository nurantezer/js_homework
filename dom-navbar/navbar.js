//* classList - shows/gets all classes tüm sınıfları gösterir/alır
//* contains - checks classList for specific class belirli bir sınıf için classList'i kontrol eder
//* add - add class  sınıf ekle
//* remove - remove class sınıfı kaldır
//* toggle - toggles class sınıfı değiştirir
//* Bu sayfada responsive var

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("random")); böyle bir şey yok tabi
    // console.log(links.classList.contains("links")); bu var.
    //* if(links.classList.contains("show-links")){
    //*     links.classList.remove("show-links");
    //* }else{
    // *    links.classList.add("show-links");
    //* }
    links.classList.toggle("show-links");  //bağlantıları göster tıklandığında
})

//!BU projede css kısmındaki .links{} önemli çünkü heigthini auto vermezsem görünmez.Boyut değiştirdiğimde media 
//!qery için gerekli
//!Çok önemliii ben .show-links clasını css de tanımlayıp burada çağırdıımm.
