import './index.css'

let button = document.getElementById("btn")

button.classList.add("ripple");


const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) =>{

    button.addEventListener("click", function(e){

        const x = e.clientX  //where client clicks
        const y = e.clientY
        // console.log(x, y);

        const buttonTop = e.target.offsetTop  //position of element
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop, buttonLeft);
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })


})