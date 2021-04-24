const color = document.querySelector('#color'); //САМ КОММЕНТАРИИ ЛИШНИЕ
const span = document.querySelector('span');
const button = document.querySelector('button');
const canvas = document.querySelector('.canvas');

let div = "";

for(let i = 1; i < 1600; i++) {
    div += '<div class="paint"></div>'
}
//console.log(div);
canvas.innerHTML = div;

//onmousedown, onmouseup, onmouseover, click
let click = false;
let color_choice = 'black';

color.onchange = function() {
    color_choice = this.value;
    span.innerText = this.value;
    span.style.color = this.value;
}
color.onclick = function() {
    color_choice = this.value;
    span.innerText = this.value;
    span.style.color = this.value;
}
/* canvas.onmousedown = function() {
    click = true;
}
body.onmouseup = function() {
    click = false;
} */

canvas.addEventListener('mousedown', function() {
    click = true;
});
canvas.addEventListener('mouseup', function() {
    click = false;
});
document.onmouseup = function() {
    click = false;
}
let all_divs = document.querySelectorAll(".paint");

/* for(let i = 0; i < all_divs.length; i++){
    all_divs[i].onmouseover = function() {
        all_divs[i].style.color = color_choice
    }
} */
all_divs.forEach((item) => {
    item.onmouseover = function() {
        if(click == true) {
            item.style.background = color_choice;
        }
    }
});

button.onclick = function() {
    all_divs.forEach((item) => {
            item.style.background = "white";
    })
}