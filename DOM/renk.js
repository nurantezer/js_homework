const colors = ["gree,","red","yellow","blue"];
const myBtn = document.getElementById("btn");
const color = document.getElementById(".color");

myBtn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}