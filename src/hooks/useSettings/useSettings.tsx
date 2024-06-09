import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

function SettingsProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true);

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(state => !state);
  }
  const value = useMemo(() => {
    return { isOpen, toggle, close };
  }, [isOpen, toggle, close]);


  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
}

export { SettingsProvider, useSettings };