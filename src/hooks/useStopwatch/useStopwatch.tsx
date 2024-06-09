import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSettings } from "@/hooks";

const StopwatchContext = createContext<StopwatchContextProps | undefined>(undefined);

const INITIAL_TIME_IN_SECONDS = 1 * 60; // 1 minute

function StopwatchProvider({ children }: PropsWithChildren) {
  const { close } = useSettings();
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        setIsActive(false);
        close();
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [isActive, count]);

  function sum(
    time: number) {
    setCount((state) => state + time);
  }
  function sub(
    time: number) {
    if (count - time <= 0) {
      return;
    }
    setCount((state) => state - time);
  }

  function toggle() {
    setIsActive((state) => !state);
  }

  function restart() {
    setIsActive(false);
    setCount(INITIAL_TIME_IN_SECONDS);
  }

  const minutes = Math.floor(count / 60).toString().padStart(2, '0');
  const seconds = (count % 60).toString().padStart(2, '0');

  const value = useMemo(() => {
    return {
      count,
      minutes,
      seconds,
      isActive,
      toggle,
      restart,
      sum,
      sub,
      setIsActive,
    };
  }, [count, minutes, seconds, isActive, toggle, sum, sub, restart, setIsActive]);


  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
}


function useStopwatch() {
  const context = useContext(StopwatchContext);

  if (context === undefined) {
    throw new Error('useStopwatch must be used within a StopwatchProvider');
  }

  return context;
}

export { StopwatchProvider, useStopwatch, INITIAL_TIME_IN_SECONDS };
