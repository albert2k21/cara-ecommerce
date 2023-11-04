/**Toggle Bar */
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const clos = document.getElementById('close')

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) 
} 

if(close) {
    clos.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

/**Image Visibility */
let mainImg = document.getElementById('mainImg');
// let smallImg = document.getElementsByClassName('smallImg');
let smallImg = document.querySelectorAll('.smallImg');

smallImg.forEach(small => {
    small.addEventListener('click', () => {
            mainImg.src = small.src;
    })

    // small.onclick = function() {
    //     mainImg.src = small.src;
    // }
});