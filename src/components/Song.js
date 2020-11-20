const Song = ({ currentSong }) => {
  return (
    <div className='song-container'>
      <img
        src={currentSong.cover}
        alt={`${currentSong.artist} - ${currentSong.name}`}
      />
      <p className='song-name'>{currentSong.name}</p>
      <p className='song-artist'>{currentSong.artist}</p>
    </div>
  );
};

export default Song;
