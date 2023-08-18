var checking = false;
const val = document.querySelector(".hamBurger");

val.addEventListener("click",()=>{
    if(checking === false){
        document.querySelector(".header").classList.add("active");
        val.innerHTML = `<i class="fa fa-remove" style="font-size:36px"></i>`
        // val.classList.add("non-active");
        checking = true;
    }
    else{
        document.querySelector(".header").classList.remove("active");
        val.innerHTML = `<i class="fa fa-navicon" style="font-size:36px"></i>`
        // val.classList.remove("non-active");
        checking = false;
    }
})