import React from 'react';
import {boundValue, setLocalStorage} from "./helpers";

function useKeyPressesToControlLocalStorageCounter({min, max, counterName}) {
  React.useEffect(() => {

    function keyDown(event){
      let newCounter = Number(localStorage.getItem(counterName));
      switch (event.key){
        case "ArrowRight": { newCounter += 1; break; }
        case "ArrowLeft": { newCounter -= 1; break; }
        default: { return; }
      }
      const boundCounter = boundValue({val:newCounter, min, max});
      setLocalStorage(counterName, boundCounter);
    }

    window.addEventListener("keydown",keyDown);
    return () => window.removeEventListener("keydown",keyDown);
  },[min,max]);
}


export default useKeyPressesToControlLocalStorageCounter;