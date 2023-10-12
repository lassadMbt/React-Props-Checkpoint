import React from 'react';
import Player from './Player';
import players from './Players';

const PlayersList = () => {
  return (
    <div className="player-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
