const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  // sessionStorage.setItem("taxRate", taxRate)
  // sessionStorage.setItem("shippingPrice", shippingPrice)
  // sessionStorage.setItem("shippingFreePrice", shippingFreePrice)

  calculateCartPrice();
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be deleted!!!`
        )
      ) {
        event.target.closest(".product").remove();
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;
  } else if (event.target.className == "remove-product") {
    event.target.closest(".product").remove();
  }
  calculateProductPrice(event.target);
  calculateCartPrice();
});

const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;
  const price = Number(
    productInfoDiv.querySelector(".product-price strong").innerText
  );
  const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
  const productTotalDiv = productInfoDiv.querySelector(".price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};

const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(".price");
  const subtotal = [...productsTotalPricesDivs].reduce(
    (acc, price) => acc + Number(price.innerText),
    0
  );
  const taxtPrice = subtotal * localStorage.getItem("taxRate");
  const totalShippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  const totalCart = subtotal + taxtPrice + totalShippingPrice;

  document.querySelector("#subtotalCart").innerText = subtotal.toFixed(2);
  document.querySelector("#taxRateCart").innerText = taxtPrice.toFixed(2);
  document.querySelector("#shippingCart").innerText =
    totalShippingPrice.toFixed(2);
  document.querySelector("#totalCart").innerText = totalCart.toFixed(2);
};

//*Target mant??????da +,-,remove teker teker se??mektense ortak alanlar??n?? se??tim i??imi kolayla??t??rd??.Fonksiyonumuzda
//*target kullanaca????m??z i??in parametre atamam??z laz??m.Bursa (event)dedim.Bu best practic bir yakla????m
//*20.sat??rda niye parent element dedim biliyor musun ????nk?? t??klad??????m ??r??nde i??lem yaps??n azaltma mesela di??erlerinde
//*yapmas??n
//*32. oldu??um yerden kapsay??c??s??na kolayca gittim
//*40. sat??rda neden event target yapt??m. T??klad??????m alanda i??lem yaps??n bo??luklarda yapmas??n diye. Sonucta bu bir
//*t??klama olay??yla ??al??????yor o y??zden fonksiyonumu addeventlistener a ekledim
//*55.sat??rda queryselecterall bana bir array like d??n??yor i??lem yapmam i??in bunu arraya ??evirmem laz??m

//*58. sat??rdaki 0 acc nin ba??lang??c degeri
//*parseFloat dedi??imde ondal??kl?? yazmama izin veryor. parsInt ise ondal??kl?? yazmama izin vermiyor
//*14.sat??rda ne yat??m sayfa a????ld??????nda carta ilk verileri basmas??n?? sa??lad??m
