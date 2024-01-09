import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioSong from './../assets/audio/Song.mp3'
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = document.getElementById('audio-element');

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <ReactAudioPlayer src={AudioSong} autoPlay controls />
        </div>
    )
}

export default AudioPlayer