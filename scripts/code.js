let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let startGame = document.getElementById("start-game")
let inputLetter = document.getElementById("input-01")
let check = document.getElementById("check")
let nextWord = document.getElementById("next-word")
let welcomeScreen = document.getElementById("welcome")
let categoriesScreen = document.getElementById("contenedor-categories")
let animalsCat = document.getElementById("animals-cat")
let superHerosCat = document.getElementById("superheros-cat")
let disneyCat = document.getElementById("disney-cat")
let pixartCat = document.getElementById("pixart-cat")
let selectCategory = document.getElementById("select-category")
let pcScreen = document.getElementById("pc-screen")
let lettersOutContainer = document.getElementById("lettersout-container")
let imgContainer = document.getElementById("img-container")
let clueContainer = document.getElementById("clue-container")
let idArray = []
let word =""
let strikes = 0
let count = 0
let x= 0
let gameOver = false
let wordComplete = []





//evento para seleccionar tipo de juego
startGame.addEventListener("click", () =>{

    if(option1.checked){

        alert("selecciono jugar con un amigo")
        welcomeScreen.style.display = "none"

    }

    else if(option2.checked){
        
        welcomeScreen.style.display = "none"
        categoriesScreen.style.display ="flex"
        /*word = computer().toUpperCase()
        checkLetters()*/
    }

    else{
        alert("seleccione una opcion valida")
    }
})

//evento para seleccionar la categoria
selectCategory.addEventListener("click", ()=>{

    if(animalsCat.checked){
        console.log("categoria animales")
        word = computer(animals)
        checkLetters()
        categoriesScreen.style.display = "none"
        nextWord.style.display = "none"
        check.style.display = "block"
        pcScreen.style.display = "grid"

    }
    else if (superHerosCat.checked){

    }
    else if (disneyCat.checked){

    }
    else if (pixartCat.checked){

    }
    else {

    }


})

//evento que comprueba la letra introducida
check.addEventListener("click", () =>{

    console.log("se disparo el evento")

    if(inputLetter.value.length>1){

        alert("introduce solo un caracter a la vez")
        inputLetter.value=""

    }

    else{


        for (let j = 0; j< word.length; j++) {
      
            console.log("entro al ciclo")
        
            if(inputLetter.value.toUpperCase() === word[j].toUpperCase())
            {
                console.log("las letras son iguales")
                let zebra = document.getElementById(idArray[j])
                console.log(zebra)
                zebra.innerHTML = inputLetter.value.toUpperCase()
                count++
                wordComplete[j] = inputLetter.value
                x=checkWord()


                if(x === word.length){

                    alert("felicidades ganaste")
                    nextGame()
                }

                else{
                }
    
            }
    
            else{
               
            }
            
        }
    
        if(x<1){
    
            strikes++

            if (strikes === 7)
            {
                console.log("strike: "+strikes)
                imgContainer.innerHTML = `<figure>
            <img src="./images/ahorcado/${strikes}.png" alt="1">
            </figure>`
                inputLetter.value = ''
                alert("perdiste")
                nextGame ()
            }

            else {
                console.log("strike: "+strikes)
                imgContainer.innerHTML = `<figure>
            <img src="./images/ahorcado/${strikes}.png" alt="1">
            </figure>`
                inputLetter.value = ''

            }

    
        }

    
        else{
    
          x=0
        }

    }

   
    inputLetter.value = ''

})

nextWord.addEventListener("click", () =>{

    word=computer(animals)
    checkLetters()
    check.style.display = "block"
    nextWord.style.display = "none"
    strikes = 0
    imgContainer.innerHTML = `<figure>
            <img src="./images/ahorcado/0.png" alt="1">
            </figure>`
    inputLetter.value = ''
})


//funcion que escoge la palabra del arreglo de la categoria y almacena letra por letra en otro arreglo
function computer (category){

    let palabra = ""
    let aleatorio = Math.floor(Math.random() * (category.length))
    let array = []

    palabra = category[aleatorio].name.toUpperCase()

    console.log(palabra)
    clueContainer.innerHTML = category[aleatorio].clue

    for (let i = 0; i < palabra.length; i++) {
        array[i] = palabra[i]
    }

    return array

}

//funcion para generar los cuadros de las letras dependiendo de la palabra
function checkLetters (){

    lettersOutContainer.innerHTML = ""

    for (let j = 0; j< word.length; j++) {
      
        lettersOutContainer.innerHTML += `
        <div class="letters-out" id="out-${j}">
                    
                </div>
        
        
        `

        idArray[j]=`out-${j}`
       
    }
}
//funcion para comprobar que todas las letras del arreglo se parezcan
function checkWord (){
    let allLetters = 0
    for (let k = 0; k < word.length ; k++) {

        if (word[k] === wordComplete[k]){
            allLetters++
        }

        else{

        }

    }

    return allLetters
}
//funcion que muestra el boton siguiente palabra
function nextGame (){
    check.style.display = "none"
    nextWord.style.display = "block"
    wordComplete = []



}