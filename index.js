console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar')
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname:"9:45",filePath:"songs/1.mp3", coverPath:"covers/cover1.png"},
    {songname:"Tu hai kahan",filepath:"songs/2.mp3", coverPath:"covers/cover2.png"},
    {songname:"Long time no see",filepath:"songs/3.mp3", coverPath:"covers/cover3.png"},
    {songname:"dorriyah",filepath:"songs/4.mp3", coverPath:"covers/cover4.png"},
    {songname:"Akhiyaan",filepath:"songs/5.mp3", coverPath:"covers/cover5.png"},
    {songname:"perfect",filepath:"songs/6.mp3", coverPath:"covers/cover6.png"},
    {songname:"see u again",filepath:"songs/7.mp3", coverPath:"covers/cover7.png"}
]

songitem.forEach((element,i )=> {
    console.log('element',i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
    
})

// audioElement.play
audioElement.addEventListener('timeupdate' , ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>9){
        songIndex = 0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})