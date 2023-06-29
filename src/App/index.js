import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import theme from "../theme";
import CustomRoutes from "../routes";
import { BrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { loginAdminByToken } from "../api/admin";
import { ContextStore } from "../context";

function App() {
  //get token from cookie
  let cookiesToken = Cookies?.get("xAccessToken");
  let { xAccessToken, setUser, setXAcessToken } = useContext(ContextStore);

  const loginbyToken = (coockieToken) => {
    loginAdminByToken(
      { address: "/api/retrict/loginbytoken" },
      { token: coockieToken }
    )
      .then((res) => {
        if (res.data.success == true) {
          console.log(res.data.message);
          setUser(res?.data?.payload?.user);
          setXAcessToken(res?.data?.payload?.xAccessToken);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("xaccesstoken after cookie", xAccessToken);
      });
  };
  useEffect(() => {
    if (cookiesToken && xAccessToken && cookiesToken !== xAccessToken) {
      Cookies.set("xAccessToken", xAccessToken, { expires: 0.125 });
    } else if (cookiesToken !== undefined && !xAccessToken) {
      loginbyToken(cookiesToken);
    }
  }, []);

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
            <div dir="rtl">
              <CustomRoutes />
            </div>
          </ThemeProvider>
        </RTL>
      </BrowserRouter>
    </>
  );
}

export default App;
