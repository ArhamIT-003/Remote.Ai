import { createContext, useEffect, useState } from "react";

const INITIAL_STATES = {
  open: false,
  onOpen: () => {},
  onClose: () => {},
};

export const SlideContext = createContext(INITIAL_STATES);

export default function SlideContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.getItem("sidebar") === "true" ? setOpen(true) : setOpen(false);
  }, []);

  const onClose = () => {
    setOpen(false);
    localStorage.setItem("sidebar", false);
  };

  const onOpen = () => {
    setOpen(true);
    localStorage.setItem("sidebar", true);
  };

  const value = {
    open,
    onOpen,
    onClose,
  };

  return (
    <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
  );
}
