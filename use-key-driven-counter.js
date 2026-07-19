import React from 'react';
import useCounterFromLocalStorage from "./use-counter-from-local-storage";
import {setLocalStorage} from "./helpers";
import useKeyPressesToControlLocalStorageCounter from "./use-key-presses-to-control-local-storage-counter";

function useKeyDrivenCounter(min, max){
  checkMinAndMaxAreValid(min, max);

  const localStorageCounter = useCounterFromLocalStorage("counter");

  useKeyPressesToControlLocalStorageCounter({min, max, counterName:"counter"})

  React.useEffect(()=>{
    setLocalStorage("counter",min);
  },[min]);

  return localStorageCounter;
}

function checkMinAndMaxAreValid(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Invalid number for min/max.');
  } else if (max < min) {
    throw new Error('Min is greater than max.');
  }
}


export default useKeyDrivenCounter;