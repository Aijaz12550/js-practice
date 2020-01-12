
let body = document.getElementById('main')
let inp = document.getElementById('inp')

let btn = document.getElementById('btn')
let div = document.getElementById('od')

// click
body.addEventListener('click', ()=>{
    console.log('clicked')
    body.style.transition = 'all 1s linear'
    body.style.background = `#ef5359`
})

div.addEventListener('click',e => console.log('div p click hua'))
btn.addEventListener('click', e => {
    e.stopPropagation()
    console.log('btn p click hua')
})


let link = document.querySelector("a");
link.addEventListener("click", event => {
console.log("Nope.");
event.preventDefault();
});

// input

const once = () => {
    console.log('input => ',inp.value)
    let len = inp.value.length
    let style = inp.style

    style.background =  (len % 2) === 0 ?'red' : '#296'
    style.color = 'white'

    inp.removeEventListener('input',once)
}

const second = (e) => {
    inp.removeEventListener('mousedown', e=>e.preventDefault())
    e.preventDefault()
    if(e.button == 2){
        console.log('second click',e)
        alert('hello')
    }
    

}

inp.addEventListener('input',once)

window.addEventListener('contextmenu', e => e.preventDefault())
window.addEventListener('mousedown', e => e.button == 2 && alert('chala'))
inp.addEventListener('input',second)

//  keydown
window.addEventListener('keyup', (e) => {
  console.log(e.key)
})

window.addEventListener('keydown', e => {
    console.log(' key =>',e.key)
    if(e.key === 'v' || e.key === 'V'){
        console.log('>>>>>>>>>>>',document)
        body.style.background = `#ef5359`
    }
    else if(e.key === 'g'){
        body.style.background = `#296`
    }
})

let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector("div");

bar.addEventListener("mousedown", event => {
    console.log('eee',event)
    if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
    }
    });
    function moved(event) {
    if (event.buttons == 0) {
    window.removeEventListener("mousemove", moved);
    } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
    }
    }