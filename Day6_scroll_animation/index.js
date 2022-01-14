
const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes(){

    const triggerBottom = window.innerHeight/5*3.7;
    // console.log(window.innerHeight);

    boxes.forEach(box =>{

        const boxTop = box.getBoundingClientRect().top;  
        console.log(box.getBoundingClientRect()); // it returns position of div in object form and top is one of the key of it

        if( boxTop < triggerBottom){
            box.classList.add("show")
        }else{
            box.classList.remove('show')
        }

    })

}