import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className='player-container'>
      <div className='time-control'>
        <p>Start time</p>
        <input type='range' name='' id='' />
        <p>End time</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          className='play-control-previous'
          icon={faChevronCircleLeft}
          size='2x'
        />
        <FontAwesomeIcon
          className='play-control-play'
          icon={faPlayCircle}
          size='2x'
        />
        <FontAwesomeIcon
          className='play-control-next'
          icon={faChevronCircleRight}
          size='2x'
        />
      </div>
    </div>
  );
};

export default Player;
