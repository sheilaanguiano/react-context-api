import React from 'react';
/* 2. You don't need to include /index.js
in the import path, when resolving the import path to the context directory node will look for an index file and load it
*/

import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  return (    
    <div className="scoreboard">
      <Header />

      <PlayerList />
      
      <AddPlayerForm />
    </div>
  );
}
  
  

export default App;
