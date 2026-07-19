import React from 'react';

function useCounterFromLocalStorage(counterName){
  const [counter, setCounter] = React.useState(Number(localStorage.getItem(counterName)));

  React.useEffect(()=>{
    function handleLocalStorageEvent(){
      setCounter(Number(localStorage.getItem(counterName)));
    }
    window.addEventListener("storage", handleLocalStorageEvent);

    return () => {window.removeEventListener("storage", handleLocalStorageEvent);}
  },[])

  return counter;
}

export default useCounterFromLocalStorage;