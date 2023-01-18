const colors = ["gree","red","yellow","blue"];
const myBtn = document.getElementById("btn");
const color = document.getElementById("color");
const body = document.getElementsByTagName("body");

myBtn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
console.log(getRandomNumber());