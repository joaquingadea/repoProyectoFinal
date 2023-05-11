let videoHa = document.getElementById("video-ha")
let buttonPlay = document.querySelector("#bar-rep_play")
let buttonPause = document.querySelector("#bar-rep_pause")
let buttonReset = document.querySelector("#reset")

buttonPlay.addEventListener("click",()=>{
    videoHa.play()
})
buttonPause.addEventListener("click",()=>{
    videoHa.pause()
})
/*buttonReset.addEventListener("click",()=>{
    videoHa.reset()
 }) 
Profe una pregunta el evento "reset" es para reiniciar un video?
console.dir(videoHa)*/