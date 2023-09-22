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
    })

}
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeALLPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-solidfa-play')
    e.target.classList.add('fa-solidfa-pause')
    audioElement.src = "songs/bre.mp3" 
audioElement.currentTime = 0;
audioElement.play();
})
})
document.getElementById(next).addEventListener('click', ()=>{
if(songIndex>9){
    songIndex = 0;
}
else{
    songIndex += 1;
}
audioElement.src =  "songs/shab.mp3"
audioElement.currentTime = 0;
audioElement.play();
})
document.getElementById(0).addEventListener('click', ()=>{
    audioElement.src =  "songs/money.mp3"
audioElement.currentTime = 0;
audioElement.play();
})
document.getElementById(1).addEventListener('click', ()=>{
    audioElement.src =  "songs/shab.mp3"
audioElement.currentTime = 0;
audioElement.play();
})
