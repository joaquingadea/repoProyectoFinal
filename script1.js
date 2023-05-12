//juego
let img1 = document.getElementById("img-rmp_1")
let img2 = document.getElementById("img-rmp_2")
let img3 = document.getElementById("img-rmp_3")
let destino1 = document.getElementById("soltar1")
let destino2 = document.getElementById("soltar2")
let destino3 = document.getElementById("soltar3")
let buttonReset = document.getElementsByClassName("button-reset")[0]

img1.addEventListener("dragstart",(event)=>{
    const infoImg1= event.target.src
    event.dataTransfer.setData("Text",infoImg1)
    console.log("funciona")
})
img2.addEventListener("dragstart",(event)=>{
    const infoImg2= event.target.src
    event.dataTransfer.setData("Text",infoImg2)
    console.log("funciona")
})
img3.addEventListener("dragstart",(event)=>{
    const infoImg3= event.target.src
    event.dataTransfer.setData("Text",infoImg3)
    
    console.log("funciona")
})

destino1.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
destino1.addEventListener("drop",(event)=>{
    let getInfo= event.dataTransfer.getData("Text")
    destino1.innerHTML=`
        <img class="juguemos_img" src= ${getInfo} alt="imagen rompecabezas" />
    `
    console.log(getInfo)
    if (getInfo === "http://127.0.0.1:5500/img/Rompe1.png") {
        img1.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/rompe2.png") {
        img2.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/Rompe3.png") {
        img3.classList.add("none")
    }
})
destino2.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
destino2.addEventListener("drop",(event)=>{
    let getInfo= event.dataTransfer.getData("Text")
    destino2.innerHTML=`
        <img class="juguemos_img" src= ${getInfo} alt="imagen rompecabezas" />
    `
    console.log(getInfo)
    if (getInfo === "http://127.0.0.1:5500/img/Rompe1.png"  ) {
        img1.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/rompe2.png"  ) {
        img2.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/Rompe3.png") {
        img3.classList.add("none")
    }
})
destino3.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
destino3.addEventListener("drop",(event)=>{
    let getInfo= event.dataTransfer.getData("Text")
    destino3.innerHTML=`
        <img class="juguemos_img" src= ${getInfo} alt="imagen rompecabezas" />
    `
    console.log(getInfo)
    if (getInfo === "http://127.0.0.1:5500/img/Rompe1.png"  ) {
        img1.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/rompe2.png"  ) {
        img2.classList.add("none")
    }
    if (getInfo === "http://127.0.0.1:5500/img/Rompe3.png") {
        img3.classList.add("none")
    }
})

buttonReset.addEventListener("click",()=>{
    window.location.reload();
})













