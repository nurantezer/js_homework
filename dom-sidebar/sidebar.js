const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    //* if (sidebar.classList.contains("show-sidebar")){
    //*     sidebar.classList.remove("show-sidebar");
    //* }else{
    //*     sidebar.classList.add("show-sidebar")
    //* }
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})





















//!Bu proje de css olarak transfor: transtlate (-100%) girildi çünkü bu özellik sidebarı ekrandan kal
//!dırıyor .show-sidebar {transform: translate(0)} yapıldı çünkü bu da sidebar çağırılfığında
//!getirecek