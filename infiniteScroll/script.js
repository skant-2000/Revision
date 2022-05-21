let container = document.getElementById("container")

var count = 0;

function load() {
    for ( let i = 0; i < 25; i++ ) {
        let item = document.createElement("div")
        count++
        item.innerHTML = `Masai School ${count}`
        container.appendChild(item)
    }
}

load()

window.addEventListener('scroll', () => {
    if ( window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ) {
        load()
        console.log("x")
    }
})