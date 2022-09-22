let nextButton = document.getElementById("nextimage")
let imgContainer = document.getElementById("figureimg")
let clic = 1
let heartC = document.getElementById("heart")

nextButton.addEventListener("click", ()=>{

    clic++

    imgContainer.innerHTML = `

    <img src="/images/${clic}.jpg" alt="${clic}">
    


    `

    if(clic == 6){
        clic = 1
        nextButton.style.display = "none"
        heartC.style.display = "block"
    }







})