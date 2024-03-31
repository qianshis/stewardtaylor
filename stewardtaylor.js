
import axios from 'axios';
import { axiosConfig } from '@stewardtaylor/proxy';
import { sleep } from '@stewardtaylor/sleep';
import { formatTimestamp } from '@stewardtaylor/date-time-processor';
import { notify } from 'feishu-notifier';
import { log } from '@stewardtaylor/log';


// music_playlist_management.js

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
        console.log(`Song "${song.title}" added to playlist "${this.name}".`);
    }

    play() {
        console.log(`Now playing playlist "${this.name}":`);
        this.songs.forEach((song, index) => {
            console.log(`${index + 1}. ${song.title} - ${song.artist}`);
        });
    }
}

// Example usage
const myPlaylist = new Playlist('My Favorites');
myPlaylist.addSong(new Song('Shape of You', 'Ed Sheeran'));
myPlaylist.addSong(new Song('Uptown Funk', 'Mark Ronson ft. Bruno Mars'));
myPlaylist.play();



