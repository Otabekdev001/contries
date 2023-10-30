const elldark=document.querySelector(".dark-heading");
elldark.addEventListener("mousedown",function(){
      document.body.classList.add("dark"),
      elldark.textContent="Light  Mode";
})
elldark.addEventListener("click",function(){
    document.body.classList.remove("dark"),
    elldark.textContent="Dark Mode";
})

