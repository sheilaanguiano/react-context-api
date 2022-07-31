import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { context => {

        return(
          <React.Fragment>
            {context.players.map( (player, index) =>
            <Player 
            /* We using this spread operator to pass the name, score 
            and ID we're getting from each player object via map all 
            at once as props, that way you don't have to explicitly list each prop name and value */ 
              {...player}
              key={player.id.toString()} 
              index={index}
               
            />
            )}
          </React.Fragment>
        );
      }}

    </Consumer>
  );
}


export default PlayerList;