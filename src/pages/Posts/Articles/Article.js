import { Typography } from "@mui/material";
import { getArticle as getArticle_api } from "../../../api/admin";
import { useEffect } from "react";
const Article = () => {
  const getArticle = (data) => {
    //myDispatch({ type: "backdrop_show" });
    return getArticle_api(data, { token: "admin" })
      ?.then((res) => {
        console.log(res.data);

        return true;
      })
      .catch((rej) => {
        alert(rej);
        //myDispatch({ type: "backdrop_hide" });
        return false;
      });
  };

  useEffect(() => {
    getArticle({ address: "article/1" });
  }, []);
  return <Typography>one Article</Typography>;
};

export default Article;
