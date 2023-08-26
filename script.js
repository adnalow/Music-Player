const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'gusto',
        displayName: 'Gusto',
        artist: 'Zack Tabudlo ft. Al James',
    },
    {
        name: 'sinta',
        displayName: 'Sinta',
        artist: 'Rob Deniel',
    },
    {
        name: 'raining',
        displayName: 'Raining in Manila',
        artist: 'Lola Amour',
    },
    {
        name: 'yk',
        displayName: 'Yk',
        artist: 'Cean Jr.',
    },
];


// Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// UpdateDom
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// On load - select Firist song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
