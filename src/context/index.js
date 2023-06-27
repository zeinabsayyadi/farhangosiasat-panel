import { createContext, useState } from "react";

//sotre
export const ContextStore = createContext({
  user: {},
  setUser: () => {},
  xAccessToken: "",
  setXAcessToken: () => {},
});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [xAccessToken, setXAcessToken] = useState("");
  return (
    <ContextStore.Provider
      value={{
        user,
        setUser,
        xAccessToken,
        setXAcessToken,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
