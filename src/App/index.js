import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import theme from "../theme";
import CustomRoutes from "../routes";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "../context";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
  }

  return (
    <>
      <BrowserRouter>
        <RTL>
          <ThemeProvider theme={theme}>
            <ContextProvider>
              <div dir="rtl">
                <CustomRoutes />
              </div>
            </ContextProvider>
          </ThemeProvider>
        </RTL>
      </BrowserRouter>
    </>
  );
}

export default App;
