const toogleBtn = document.querySelector(".sidebar-toggle")
const   closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")
toogleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
    sidebar.classList.toggle('show-sidebar')
    closeBtn.classList.remove('show-sidebar')
})