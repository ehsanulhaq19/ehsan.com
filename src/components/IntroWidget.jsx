import { useEffect } from 'react';
import useAudioPlayer from '../hooks/useAudioPlayer';
import menIntro from "../assets/gifs/menIntro.gif";
import playIcon from "../assets/icons/play.png";

const IntroWidget = () => {
  //Hooks
  const { audio, stopAudio, setStopAudio } = useAudioPlayer('/audio/audioIntroduction.mp3', 3000)
  
  //Events
  useEffect(() => {
  }, [audio])

  //Functions
  const handleWidgetClick = () => {
    setStopAudio(!stopAudio)
  }

  return <div className={`intro-widget ${ audio && !stopAudio ? "play-mode" : ""}`}>
    {
        audio && !stopAudio ? <img className="intro-image" src={menIntro} onClick={handleWidgetClick}/> : null
    }
    <div className="stop-container">
        <img src={playIcon} onClick={handleWidgetClick}/>
    </div>
  </div>
};

export default IntroWidget;
