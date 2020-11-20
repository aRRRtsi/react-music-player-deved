import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
  // useRefs - selection html element
  const audioRef = useRef(null);
  // Event handlers
  const playSongHandler = () => {
    audioRef.current.play();
  };
  return (
    <div className='player-container'>
      <div className='time-controller'>
        <p>Start time</p>
        <input type='range' />
        <p>End time</p>
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
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
