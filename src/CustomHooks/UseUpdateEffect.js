import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

/*

Use:
useEffect but does not work on first render
useUpdateEffect(()=>function_to_execute, [values])
 */
