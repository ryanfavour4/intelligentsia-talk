import { useState, useEffect } from "react";

export const useHome = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioUrl = "/audio/bg-music.mp3";

    useEffect(() => {
        var audio: any = document.getElementById("audio");
        audio.volume = 0.1;
        audio.loop = true;
        audio.pause();
    }, []);

    const handlePlayPause = () => {
        var audio: any = document.getElementById("audio");
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return { handlePlayPause, audioUrl };
};
