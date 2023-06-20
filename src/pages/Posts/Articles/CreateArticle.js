import { Typography } from "@mui/material";
import { useEffect } from "react";
import { postArticle as PostArticle_api } from "../../../api/admin";

const CreateArticle = () => {
  const postArticle = (data) => {
    //myDispatch({ type: "backdrop_show" });
    return PostArticle_api(data, {
      token: "admin",
      contentType: "application/json",
    })
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
  const newArticle = {
    createdAt: "952",
    coverUrl: "coverUrl 1",
    content: "content 1",
    author: "author 1",
    title: "title 1",
    subtitle: "subtitle 1",
    id: "1",
  };
  useEffect(() => {
    postArticle({ address: "article", body: newArticle });
  }, []);
  return <Typography>create new post</Typography>;
};

export default CreateArticle;
