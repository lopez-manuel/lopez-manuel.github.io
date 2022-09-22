let loginButton = document.getElementById("login")
let nameLogin = document.getElementById("name")
let lastName = document.getElementById("lastname")


loginButton.addEventListener("click", ()=>{

    if(nameLogin.value.toLowerCase()  === "jackeline" | nameLogin.value.toLowerCase()  === "mariana" | nameLogin.value.toLowerCase() === "mariana jackeline" | nameLogin.value.toLowerCase() === "jacky" ){

        if(lastName.value.toLowerCase() === "salazar" | lastName.value.toLowerCase() === "martinez" | lastName.value.toLowerCase() === "salazar martinez"){

            window.location.href = "/page2.html"

        }

        else{
            alert("Tu apellido es incorrecto")
        }

    }

    else{
        alert("Tu nombre es incorrecto")
    }

})