const bl_btn=document.querySelector("#mobile-btn")
const bl_menu=document.querySelector("#mobile-menu")
console.log(bl_btn)
console.log(bl_menu)
bl_btn.addEventListener('click',function(){
    bl_menu.classList.toggle('hidden')
})