import { createContext, useState } from "react";

//sotre
export const ContextStore = createContext({
  user: {},
  setUser: () => {},
});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <ContextStore.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
