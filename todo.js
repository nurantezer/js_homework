const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("todo-button")
const todoUl = document.getElementById("todo-ul")

addBtn.addEventListener("click", () =>{
    if(todoInput.ariaValueMax.trim() === ""){
        alert("please enter new todo")
    }else{
        const newTodo = {                //*burada herbir li yi yakaladım
            id:new Date().getTime(),     //*sileceğim value ya uniq değer atadım
            completed:false,             //*başta tamamlanmadı  
            text:todoInput.value         //*burda inputun içindeki texti yakaladım
        }
    }
})











//*trim() iki taraftaki boşluğuda kaldırıyor. .....a....v  gibi av yapıyor