import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
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
              removePlayer={props.removePlayer}           
            />
            )}
          </React.Fragment>


        );
      }}

    </Consumer>
  );
}

PlayerList.propTypes = {
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;