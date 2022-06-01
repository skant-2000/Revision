let button = document.getElementById("button")

function buttonClick() {
    console.log("Button Clicked")
}

let debounce;
let clickDebounce =  (fn, delay) => { 
    return function() {
        debounce && clearTimeout(debounce)
        debounce = setTimeout(() => fn(), delay)
    }
}

button.addEventListener("click", clickDebounce(buttonClick, 1000))