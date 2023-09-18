import { useState } from 'react';
import LandingPage from "./components/LandingPage";
import LikeButton from "./components/LikeButton";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import './components/styles/main.css';


const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Dylan'
    }
  });

  const handleClick = () => {
    setGame(prevState => ({
      ...prevState,
      player: {
        ...prevState.player,
        name: 'Justin'
      }
    }));
    console.log('Name has changed:', game.player.name);
  };

  const items = ["1", "2", "3", "4", "5"];

  return (
    <>
      <Navbar />
      <LandingPage />
      <ListGroup items={items} header={'Rate and hit the thumbs up!'}/>
      <LikeButton onClick={handleClick} />
    </>
  );
};

export default App;



