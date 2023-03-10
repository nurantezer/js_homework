const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "apiKey",
  EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});
const getWeatherDataFromApi = async () => {
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(
      (el) =>
        el.querySelector(".city-name span").innerText.toLowerCase() ==
        inputVal.toLowerCase()
    );
    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").innerText
      }, Please search for another city 😉`;
      form.reset();
      input.focus();
      //break func!!!!
      return;
    }
  }

  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  //fetch and axios func.
  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  const { main, name, sys, weather } = response;

  // const response = await axios.get(url);
  // const { main, name, sys, weather } = response.data;
  // const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
  //   weather[0]["icon"]
  // }.svg`;
  // console.log(iconUrl)

  const icon = `${weather[0]["icon"]}.svg`;
  const cityCartLi = document.createElement("li");
  cityCartLi.classList.add("city");
  const cityCartInnerHTML = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="./svg/${icon}">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
  cityCartLi.innerHTML = cityCartInnerHTML;
  list.appendChild(cityCartLi);
  //
  msg.textContent = "";
  form.reset();
  input.focus();
};
 

//*Form seçince reset işlemi kolay olur.Form submit işlemi enter veya formun içindeki submit butonu ile direk 
//*yapılabiliyor.
//* top-banner içindeki form
//*e.preventDefault() formu submit edip sayfayı yeniliyor. Bu fonksiyon sayensinde bu işlemi durduruyorum.Formu 
//*submit etmiyor artık.Sen benim istediğim gibi çalış dedik sayfayı yenileme benim verdiğim fonksiyonu tetikle
//*Form kullanmanın bir avantajı her value yu silmek yerine form.reset yaptığımda inputlar boşalıyor. 
//*Formun ikinci bir avantajıda kullanıcı kolaylık ister submit demeden enterle de gönderiyorum verileri
//*Aksiyos hem veri gönderip hemde veri alırken date typene json olarak alabiliyor.Aksiyos bir kütüphanedir.
//*Fetch ile işlem yaparken veriyi json olarak gönderip jason parse etmem gerekiyor.Aksiyos daha kolay
//*DecryptStringAES şifreli apıyi çözdüm burda.,
//*figure figcaption seo
//*creat element oluştururken çerçeveyi oluşturup innerhtml ile yazabilirm kalanını hepsi öyle yapılmıyor piyasada
//*prepend dediğimde son eklediğimi başta gösteriyor
//*forEach => array +nodeList
//*map,filter reduce => array   Array.from ile arraye çevirdim