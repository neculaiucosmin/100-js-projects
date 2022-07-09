const toggleBtn=document.getElementById("tgl-btn");
const navList=document.querySelector(".nav-bar");
const mainContainer=document.querySelector(".main")
const ftr=document.querySelector(".footer")
const navLogo=document.querySelector(".nav-logo")
const title=document.querySelector(".ttl")

toggleBtn.addEventListener("click", ()=>{
    if (toggleBtn.classList.contains("active")){
        toggleBtn.classList.remove("active");
        navList.classList.remove("active");
        navLogo.classList.remove("active");
        mainContainer.classList.remove("hidden");
        title.classList.remove("hidden");
        ftr.classList.remove("hidden");
    }
    else {
        toggleBtn.classList.add("active");
        navList.classList.add("active");
        navLogo.classList.add("active")
        mainContainer.classList.add("hidden");
        title.classList.add("hidden");
        ftr.classList.add("hidden");

    }
})