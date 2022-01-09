
const panels = document.querySelectorAll(".panel");


panels.forEach(panel =>{


    panel.addEventListener("mouseover", ()=>{

        removeActiveClasses();
        panel.classList.add("active"); //using classList property we can add or remove classes from css

    })

})

function removeActiveClasses(){

    panels.forEach(panel =>{

        panel.classList.remove("active")

    })


}

//logic=>

//when we take our mouse over any of the card, first it removes the active classes from all the cards 
//after removing all  active classes it adds active class on the selected card and its flex chenges from .5 to 5 as we seen in css