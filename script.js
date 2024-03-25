console.log("Welcome to Sportify")
//Initilize
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs  = [
    {songName : "closer", filepath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName : "friends", filepath: "song/2.mp3", coverPath:"cover/2.jpg"},
    {songName : "forever", filepath: "song/3.mp3", coverPath:"cover/3.jpg"},
    {songName : "Memories", filepath: "song/4.mp3", coverPath:"cover/4.jpg"},
    {songName : "Moonlight", filepath: "song/5.mp3", coverPath:"cover/5.jpg"},
]
songItems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

})

//audioElement.play();

//handel play/pause cilick
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    //not working
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-playe-circle');
        gif.style.opacity=0;
    }
    
    
})
//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //for update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    //not working bar is not updating
    myProgressBar.value = progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-pause-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.adddEventListner('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-playe-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 0
 
    }
    else{
    songIndex += 1;
    }
    audioElement.src = songs/$(songIndex+1).mp3;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
 
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = songs/$(songIndex+1).mp3;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})



