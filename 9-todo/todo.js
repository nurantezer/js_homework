const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("todo-button")
const todoUl = document.getElementById("todo-ul")

const todos = []; //*aşağıda oluşturduğum objeler buraya gelecek ve json formatında tutmuş olacağım

addBtn.addEventListener("click", () =>{
    if(todoInput.ariaValueMax.trim() === ""){
        alert("please enter new todo")
    }else{
        const newTodo = {                //*burada herbir li yi yakaladım
            id:new Date().getTime(),     //*sileceğim value ya uniq değer atadım
            completed:false,             //*başta tamamlanmadı  
            text:todoInput.value         //*burda inputun içindeki texti yakaladım
        }
        createListElement(newTodo);
        todos.push(newTodo); //* oluşturduğum her nemTodoyu todosun içine push yaptım
        localStorage.setItem("TODOS", JSON.stringify(todos))//*todos arrayimi göndermiş oldum
        todoInput.value = "" //*her clickten sonra inputumun boş olmasını istiyorum
    }
})

function createListElement(newTodo) {
    const {id,completed,text} = newTodo
    const li = document.createElement("li")
    li.setAttribute("id",id); //* 12.satırdaki ıdyi burada tanımladım
    completed && li.classList.add("checked");

    const okIcon = document.createElement("i");
    okIcon.setAttribute("class", "fas fa-check"); //*Bu fontawesome daki doğru klası bunu eklemezem iconlar gelmez
    li.appendChild(okIcon);

    const p = document.createElement("p")
    const pTextNode = document.createTextNode(text) //*yukarı da destructing ettiğim için böyle çağırabiliyorum
    p.appendChild(pTextNode)
    li.appendChild(p);

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");

    todoUl.appendChild(li)
}

todoUl.addEventListener("click", (e) => {
    const id = e.target.parentElement.getAttribute("id")//*yakaladığım yerin parentına git ve onun id sini const idye eşitle
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove(); //*sildim
        todos = todos.filter((todo) => todo.id !== Number(id)) //*araydan de sildim
        localStorage.setItem("TODOS", JSON.stringify(todos)) //*sildiğim şeklini local storageye attım
    }else if(e.target.classList.contains("fa-check")){
        e.target.parentElement.classList.toggle("checked"); //*renk özelliğni veiryor yeşil kırmızı
        todos.map((todo, index) =>{
            if(todoInput.id == id){
                todos[index].completed = !todos[index].completed
            }
        })
         localStorage.setItem("TODOS", JSON.stringify(todos));
    }
})

todoInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        addBtn.click()
    }
})

window.onload = function(){
    todoInput.focus()
}






//*44.satır buda idleri farklı check ve çöp kutusunun ama ben getAttribute diyerek eşitlemiş oldum.Bunu kolayca 
//*secebileyim diye yaptım
//*trim() iki taraftaki boşluğuda kaldırıyor. .....a....v  gibi av yapıyor
//*47.satır bu işlem ile eşit olanı silip kalanları tekrar arraye gönderdim