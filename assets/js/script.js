const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const list =document.querySelectorAll('.nav-links li');
console.log(list);

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
})

list.forEach(function(li){
    li.addEventListener('click', () => {
        for(var i=0; i<list.length; i++){
            list[i].classList.remove('active');
        }
        li.classList.add('active');
    })
})