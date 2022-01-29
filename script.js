const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

const MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');


if(bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



smallimg[0].onclick = () => {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = () => {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = () => {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = () => {
    MainImg.src = smallimg[3].src;
}