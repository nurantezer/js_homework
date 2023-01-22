//!başlangıç ​​değerini sıfıra ayarla
let count = 0;
//!select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})

//!const styles = e.currentTarget.classList; burada seçimim queryselectorall ile olduğu için nodelist üzerinde foreach
//!ile devam ettim ve burada currentTarget ile classListteki nodeleri seçip contains metodu ile içine girdim.