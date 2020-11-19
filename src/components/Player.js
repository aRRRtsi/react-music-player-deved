import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className='player-container'>
      <div className='time-controller'>
        <p>Start time</p>
        <input type='range' />
        <p>End time</p>
      </div>
      <div className='play-controller'>
        <FontAwesomeIcon
          className='icon play-controller-previous'
          icon={faChevronCircleLeft}
          size='3x'
        />
        <FontAwesomeIcon
          className='icon play-controller-play'
          icon={faPlayCircle}
          size='3x'
        />
        <FontAwesomeIcon
          className='icon play-controller-next'
          icon={faChevronCircleRight}
          size='3x'
        />
      </div>
    </div>
  );
};

export default Player;
