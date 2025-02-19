const pantalla = document.querySelector(".Pantalla")
const botones = document.querySelectorAll(".btn")
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent
        if (boton.id === "C") {
            pantalla.textContent = "0"
            return
        }
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0"                
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return
        }
        if (boton.id === "equal") {
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error"
            }
            return
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonPresionado
        } else {
            pantalla.textContent += botonPresionado
        }
    })
})