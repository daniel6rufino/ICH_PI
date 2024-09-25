document.addEventListener("DOMContentLoaded", function(){
    var abrir = true
    document.querySelector("#ativar").addEventListener("click", function () {
        var navbar = document.querySelector("#navbar")   
        if(abrir){
            navbar.style.animation = "1s ease abrir forwards"
            //navbar.style.width = "320px"
            abrir = false
        }else{
            navbar.style.animation = "1s ease fechar forwards"
            //navbar.style.width = "0px"
            abrir = true
        }

    })
})