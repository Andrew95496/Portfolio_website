const showHypergraze = document.getElementById("graze");
const showKoin = document.getElementById("koin");
const showElixer = document.getElementById("elixer");
const showTemp = document.getElementById("temp");
const showPort = document.getElementById("port");
const showGame = document.getElementById("game");



document.addEventListener('dblclick', () =>{
    showHypergraze.classList.remove("card")
    showKoin.classList.remove("card")
    showElixer.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
    showGame.classList.remove("card")
})



// hypergraze
const showItem1 = () => {
    showHypergraze.classList.add("card")

    // hide others
    showKoin.classList.remove("card")
    showElixer.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
    showGame.classList.remove("card")

}


// katanakoin
const showItem2 = () => {
    showKoin.classList.add("card")

    // hide others
    showHypergraze.classList.remove("card")
    showElixer.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
    showGame.classList.remove("card")
}


// elixer
const showItem3 = () => {
    showElixer.classList.add("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
    showGame.classList.remove("card")
}


// templates
const showItem4 = () => {
    showTemp.classList.add("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showElixer.classList.remove("card")
    showPort.classList.remove("card")
    showGame.classList.remove("card")
}


// porfolio
const showItem5 = () => {
    showPort.classList.add("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showTemp.classList.remove("card")
    showElixer.classList.remove("card")
    showGame.classList.remove("card")
}

// game
const showItem6 = () => {
    showGame.classList.add("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showTemp.classList.remove("card")
    showElixer.classList.remove("card")
    showPort.classList.remove("card")
}