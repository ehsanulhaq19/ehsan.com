import { useState, useEffect } from "react";

const useAudioPlayer = (audioFile, playAfterTime = 0) => {
  const [playCount, setPlayCount] = useState(0)
  const [audio, setAudio] = useState()
  const [stopAudio, setStopAudio] = useState(false)

  useEffect(() => {
    const interval = setTimeout(() => {
        let newAudio = new Audio(audioFile);
        newAudio.play()
        .then(() => {
          setAudio(newAudio)
          newAudio.addEventListener('ended', function() {
            newAudio.pause();
            newAudio.currentTime = 0;
            setStopAudio(true)
          });
        })
        .catch(error => {
          setPlayCount(playCount + 1)
          setAudio(null)
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

  useEffect(() => {
    if (!audio) {
      return
    }

    if (stopAudio) {
      audio.pause()
    } else {
      audio.play()
    }
  }, [stopAudio])

  return {
    audio,
    stopAudio,
    setStopAudio
  }
};

export default useAudioPlayer;
