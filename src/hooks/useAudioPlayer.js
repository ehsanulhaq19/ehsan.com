import { useState, useEffect } from "react";

const useAudioPlayer = (audioFile, playAfterTime = 0) => {
  const [playCount, setPlayCount] = useState(0)

  useEffect(() => {
    let audio;
    const interval = setTimeout(() => {
        audio = new Audio(audioFile);
        audio.play()
        .catch(error => {
            setPlayCount(playCount + 1)
        });
    }, playAfterTime);
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      clearTimeout(interval);
    };
  }, [audioFile, playCount]);
};

export default useAudioPlayer;
