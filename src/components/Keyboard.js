import React, { useContext, useCallback, useEffect } from "react";
import Key from './Key';
import { AppContext } from '../App';

function Keyboard() {
    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
    const key1=["Q","W","E","R","U","I","O","P"];
    const key2=["A","S","D","F","J","K","L"];
    const key3=["Z","X","C","V","B","N","M"];
     const handleKeyboard = useCallback((event)=>{
        if(event.key === "Enter"){
            onEnter();
        }else if(event.key === "Backspace"){
            onDelete();
        }
        else{
            key1.forEach((key)=>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                onSelectLetter(key);
            } });
            key2.forEach((key)=>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                onSelectLetter(key);
            } });
            key3.forEach((key)=>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                onSelectLetter(key);
            } });
        }
    }, [onEnter, onDelete, onSelectLetter]);
    
        useEffect(() => {document.addEventListener("keydown", handleKeyboard);
            return()=>{ document.removeEventListener("keydown", handleKeyboard);
                
            };
        }, [handleKeyboard]);


     
  // <div className="line3"> {key3.map((key) => {  return <div>{key}</div>  }  ) } </div>
  return (
    <div className="keyboard">
       <div className="line1">{key1.map((key) => {  return <Key keyVal = {key} /> })}</div>

        <div className="line2">{key2.map((key) => {  return <Key keyVal = {key} /> })}</div>

        <div className="line3">
            <Key keyVal={"Enter"} bigKey/>
            {key3.map((key) => {  return <Key keyVal = {key} /> })}
            <Key keyVal={"Delete"} bigKey/>
           
            </div>
      
    </div>
  )
}

export default Keyboard