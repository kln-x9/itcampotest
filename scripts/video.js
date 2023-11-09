const video = document.querySelector('#myVideo')
const btnPlay = document.querySelector('#play') 
const btnMute = document.querySelector('#mute')
const videoTitlehtml = document.querySelector('.video__title')
const videoTexthtml = document.querySelector('.video__text')

const videotitle = ['Vinland Saga', 'Клавиатура рандоманая красивая','Ворлдофваркрафт']
const videodesc = ['Опенинг','Обзор','Кул сторис']


const playList = ['video1','video2','video3']
let number = 0

function play(){
    console.log('Кнопка включения видео')
    if(video.paused === true){
        video.play()
        btnPlay.textContent = 'Pause'

    }else{
        video.pause()
        btnPlay.textContent = 'Play'
    }
}
function mute(){
    if(video.muted === true){
        video.muted = false
        btnMute.textContent = 'Off'
    }else{
        video.muted = true
        btnMute.textContent = 'On'
    }
}
function next(){

    if(number<playList.length -1){
        number = number + 1 
    }else{
        number = 0
    }
    videoTitlehtml.textContent = videotitle[number]
    videoTexthtml.textContent = videodesc[number]
    
    video.src = `video/${playList[number]}.mp4`
}
function prev(){
    if(number > 0 ){
        number = number - 1
    }else{
        number = playList.length -1
    }
    videoTitlehtml.textContent = videotitle[number]
    videoTexthtml.textContent = videodesc[number]
    video.src = `video/${playList[number]}.mp4`
}
