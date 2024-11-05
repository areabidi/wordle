import React, { createContext, useContext } from 'react';
import { AppContext } from '../App';


function Letter({letterPos, attemptVal}){
   const {board} = useContext(AppContext);
   const Letter = board[attemptVal][letterPos];
   return <div className="letter">{Letter}</div>
  
}
export default Letter;
