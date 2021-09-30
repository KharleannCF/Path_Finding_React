import { useEffect } from "react";
import useTimeout from "./UseTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

/* 
Use: Use somenthing after a delay
useDebounce(()=>function_to_execute, time, value_to_change)
 */
