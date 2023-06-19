const bold = document.querySelector('.boldich');
const italic = document.querySelector('.cursivich');
const defaultFont = document.querySelector('.defaultich');

const textAreach = document.querySelector('textarea');



bold.addEventListener('click',function(){
    textAreach.classList.remove(textAreach.className)
    textAreach.classList.add('bold')
})


italic.addEventListener('click',function(){
    textAreach.classList.remove(textAreach.className)
    textAreach.classList.add('cursiv')
})



defaultFont.addEventListener('click',function(){
    textAreach.classList.remove(textAreach.className)
    textAreach.classList.add('defaultCl')
})

