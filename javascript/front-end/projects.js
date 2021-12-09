const showHypergraze = document.getElementById("graze");
const showKoin = document.getElementById("koin");
const showElixer = document.getElementById("elixer");
const showTemp = document.getElementById("temp");
const showPort = document.getElementById("port");





// hypergraze
const showItem1 = () => {
    showHypergraze.classList.toggle("card")

    // hide others
    showKoin.classList.remove("card")
    showElixer.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
}


// katanakoin
const showItem2 = () => {
    showKoin.classList.toggle("card")

    // hide others
    showHypergraze.classList.remove("card")
    showElixer.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")
}


// elixer
const showItem3 = () => {
    showElixer.classList.toggle("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showTemp.classList.remove("card")
    showPort.classList.remove("card")

}


// templates
const showItem4 = () => {
    showTemp.classList.toggle("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showElixer.classList.remove("card")
    showPort.classList.remove("card")
}


// porfolio
const showItem5 = () => {
    showPort.classList.toggle("card")

    // hide others
    showKoin.classList.remove("card")
    showHypergraze.classList.remove("card")
    showTemp.classList.remove("card")
    showElixer.classList.remove("card")
}