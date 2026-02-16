const toggle= document.querySelector("#themetoggle");

toggle.addEventListener("change",()=>{
    document.body.classList.toggle("light");
})
