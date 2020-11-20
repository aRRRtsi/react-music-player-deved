import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // States
  // Song duration state
  const [songDuration, setSongDuration] = useState({
    currentTime: null,
    duration: null,
  });
  // useRefs - selection html element
  const audioRef = useRef(null);
  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongDuration({ ...songDuration, currentTime, duration });
  };
  const timeFormatter = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, '0');
    return `${minutes}:${secondsWithZero}`;
  };

  return (
    <div className='player-container'>
      <div className='time-controller'>
        <p>{timeFormatter(songDuration.currentTime)}</p>
        <input type='range' />
        <p>{timeFormatter(songDuration.duration)}</p>
      </div>
      <div className='play-controller'>
        <FontAwesomeIcon
          className='play-controller-previous'
          icon={faChevronCircleLeft}
          size='3x'
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play-controller-play'
          icon={faPlayCircle}
          size='3x'
        />
        <FontAwesomeIcon
          className='play-controller-next'
          icon={faChevronCircleRight}
          size='3x'
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
