import React, { useState, useRef, useEffect } from 'react';

const useTypewriter = (message, interval) => {
  const [txt, setTxt] = useState("");

  const intervalRef = useRef();

  useEffect(() => {
    let i = 0;
    clearInterval(intervalRef.current);  // clear interval if message changes
    if (!message.length) return; // do nothing if message is empty

    intervalRef.current = setInterval(() => {
      setTxt(t => t + message[i]);
      i++;
      if (i == message.length) clearInterval(intervalRef.current); // clear interval at end of message
    }, interval);

    return () => clearInterval(intervalRef.current); // clear interval on unmount
  }, [message, intervalRef, setTxt]);

  return [txt];
}
 
export default useTypewriter;
