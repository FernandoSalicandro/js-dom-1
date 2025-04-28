//prelevo sia l'elemento lampadina sia l'elemento bottone per poterli manipolare

const lampadinaImg = document.getElementById("btn-img");
console.log(lampadinaImg);

const btnAccensioneLampadina = document.querySelector(".accendi-btn")
console.log(btnAccensioneLampadina)

let accesa = false;

btnAccensioneLampadina.addEventListener("click", function () {
    
    if (!accesa) {
        btnAccensioneLampadina.classList.add("accendi-btn-pink")
        btnAccensioneLampadina.innerText = "Spegni La Lampadina";
        lampadinaImg.src = "./img/yellow_lamp 1.png"
        
        accesa = true;
    }

    else {
        btnAccensioneLampadina.classList.remove("accendi-btn-pink");
        btnAccensioneLampadina.innerText = "Accendi La Lampadina";
        lampadinaImg.src = "./img/white_lamp 1.png";
        accesa = false;
    }

console.log(btnAccensioneLampadina)
})

