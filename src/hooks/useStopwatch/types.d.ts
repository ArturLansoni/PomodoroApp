type StopwatchContextProps = {
  count: number;
  minutes: string;
  seconds: string;
  isActive: boolean;
  sum: (count: number) => void;
  sub: (count: number) => void;
  toggle: () => void;
  restart: () => void;
  setIsActive: (active: boolean) => void;
};
