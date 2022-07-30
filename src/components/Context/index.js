import React from 'react';

/*
1. Assing context to a variable, as well as the Provider and the Consumer with the export keyword to use them in other files
*/
const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;