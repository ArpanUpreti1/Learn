const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".cross");
const sideBar = document.querySelector(".container");

toggleBtn.addEventListener('click', function () {
    sideBar.classList.toggle("show-container");
});

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove("show-container");
});
    