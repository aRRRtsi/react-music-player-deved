import { useState } from 'react';

// Styles
import './styles/app.scss';

// Components
import Player from './components/Player';
import Song from './components/Song';

// Data
import data from './data.json';

function App() {
  // States
  // Selecting all songs
  const [songs, setSongs] = useState(data);
  // Selecting current song from Songs .json array
  const [currentSong, setCurrentSong] = useState(songs.Songs[0]);
  return (
    <main>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </main>
  );
}

export default App;
