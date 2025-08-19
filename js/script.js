const dark=document.querySelector(".menu-bg");
const img =document.querySelector('.mockup')
const menu=document.getElementById('mainNav');
menu.addEventListener('show.bs.collapse',()=>{
    dark.classList.add('dark-bg');
    img.style.opacity = '0'
});
menu.addEventListener('hide.bs.collapse', ()=>{
    dark.classList.remove('dark-bg');
});

