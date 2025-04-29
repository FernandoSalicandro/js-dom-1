//prelevo sia l'elemento lampadina sia l'elemento bottone per poterli manipolare

// const lampadinaImg = document.getElementById("btn-img");
// console.log(lampadinaImg);

// const btnAccensioneLampadina = document.querySelector(".accendi-btn")
// console.log(btnAccensioneLampadina)

// //imposto la variabile flag di stato
// let accesa = false;

// btnAccensioneLampadina.addEventListener("click", function () {

//     //imposto la callback function in base allo stato del bottone

//     if (!accesa) {
//         btnAccensioneLampadina.classList.add("accendi-btn-pink")
//         btnAccensioneLampadina.innerText = "Spegni La Lampadina";
//         lampadinaImg.src = "./img/yellow_lamp 1.png"
//         console.log(btnAccensioneLampadina)
//         accesa = true;
//     }

//     else {
//         btnAccensioneLampadina.classList.remove("accendi-btn-pink");
//         btnAccensioneLampadina.innerText = "Accendi La Lampadina";
//         lampadinaImg.src = "./img/white_lamp 1.png";
//         accesa = false;
//     }


// })


// metodo più compatto tramite toggle

// imposto lo stato
// let accesa = false;
// //aggiungo il listener per il click
// btnAccensioneLampadina.addEventListener("click", function (){
// //quando avviene il click lo stato cambia da acceso a non acceso
//     accesa = !accesa
//     // cambio il testo e la lampadina in base allo stato acceso/non acceso
//     btnAccensioneLampadina.innerText = accesa ?  "Spegni la Lampadina" : "Accendi La Lampadina";
//     lampadinaImg.src = accesa ? "./img/yellow_lamp 1.png" : "./img/white_lamp 1.png"

//     // uso la toggle function per aggiungere e rimuovere la classe di stile del bottone
//     btnAccensioneLampadina.classList.toggle("accendi-btn-pink");

// })


//Versione bonus - lampadina che lampeggia;

const bottoneLampadina = document.querySelector(".accendi-btn");


const immagineLampadina = document.getElementById("btn-img");



//setto indicatori di stato
let èAccesa = false;
let staLampeggiando = false;

//dichiaro l'intervallo per dopo
let interval;


bottoneLampadina.addEventListener("click", function lampeggia() {

    //al primo click cambio il bg e il testo del bottone e faccio lampeggiare
    if (!staLampeggiando) {

        bottoneLampadina.classList.add("accendi-btn-pink");
        bottoneLampadina.innerText = "Spegni Lampadina";

        interval = setInterval(function () {
            if (èAccesa) {
                immagineLampadina.src = "./img/white_lamp 1.png";
                èAccesa = false;
            } else {
                immagineLampadina.src = "./img/yellow_lamp 1.png";
                èAccesa = true;
            }
        }, 300);

        staLampeggiando = true;

    } else {
        
        //al secondo click fermo l'intervallo e restituisco lo stile originale
        clearInterval(interval);
        bottoneLampadina.classList.remove("accendi-btn-pink");
        bottoneLampadina.innerText = "Accendi Lampadina";
        immagineLampadina.src = "./img/white_lamp 1.png"; 
        èAccesa = false;
        staLampeggiando = false;
    }
});






