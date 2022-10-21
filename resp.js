console.log("Welcome to Anime");
let songIndex = 0;
let audioElement = new Audio('songs/wannabe.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Money (Remix)", filepath: "songs/money.mp3", coverpath: "pic/money.jpg",
    songName: "S,HAB", filepath: "songs/shab.mp3", coverpath: "pic/shab.jpg" ,
    songName: "Pirate", filepath: "songs/pirate.mp3", coverpath: "pic/pirate-logo.png",
    songName: "Reurrection", filepath: "songs/reurrection.mp3", coverpath: "pic/reurrection.jpg",
    songName: "Habibi", filepath: "songs/habibi.mp3", coverpath: "pic/habibi.jpg",
    songName: "Bre Petrunko", filepath: "songs/bre.mp3", coverpath: "pic/bre.jpg",
    songName: "Wanna Be", filepath: "songs/wannabe.mp3", coverpath: "pic/wannabe.jpg"}

]
// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
    audioElement.addEventListener('timeupdate', ()=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        console.log(progress);
        myProgressBar.value = progress;
    })
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })
})
const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-pause')
        element.classList.add('fa-solid fa-play')
    })

}
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeALLPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-solid fa-play')
    e.target.classList.add('fa-solid fa-pause')
audioElement.src =  'songs/habibi.mp3';
audioElement.currentTime = 0;
audioElement.play();
})
})
