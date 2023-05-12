let videoHa = document.getElementById("video-ha")
let buttonPlay = document.querySelector("#bar-rep_play")
let buttonPause = document.querySelector("#bar-rep_pause")


buttonPlay.addEventListener("click",()=>{
    videoHa.play()
})
buttonPause.addEventListener("click",()=>{
    videoHa.pause()
})
