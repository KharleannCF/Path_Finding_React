import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      callbackRef.current(), delay;
    }, [delay]);
  });

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [delay]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { set, clear };
}
/* 

Use:
const {clear, reset} = useTimeout(()=> function_to_execute, time)
execute a function after the "time" has passed
*/
