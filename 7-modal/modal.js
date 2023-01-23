//* select modal-btn,modal-overlay,close-btn
// *listen for click events on modal-btn and close-btn
//* when user clicks modal-btn add .open-modal to modal-overlay
//*kullanıcı modal-btn'yi tıkladığında modal-overlay'e .open-modal ekleyin
//* when user clicks close-btn remove .open-modal from modal-overlay
//*kullanıcı kapat-btn'yi tıkladığında .open-modal'ı modal-overlay'den kaldır
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal")
});
closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})

//*open-modal ccsde