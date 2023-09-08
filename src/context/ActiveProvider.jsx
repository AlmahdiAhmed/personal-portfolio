"use client";

import { createContext, useState } from "react";

export const ActiveContext = createContext();
const ActiveSectionContextProvider = ({ children }) => {
  const [active, setActive] = useState("Home");
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
export default ActiveSectionContextProvider;
