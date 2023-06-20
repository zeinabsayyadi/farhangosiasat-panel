import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import POSTS from "../../../_mock/blog";
import ArticleCard from "../../../sections/@dashboard/articles/ArticlePostCard";
import { useEffect } from "react";

import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useNavigate } from "react-router-dom";
import { getAllArticles as getAllArticles_api } from "../../../api/admin";
const Articles = () => {
  const navigate = useNavigate();
  const getArticles = async (data) => {
    //myDispatch({ type: "backdrop_show" });
    try {
      const res = await getAllArticles_api(data, { token: "admin" });
      //console.log(res.data);
      res?.data.forEach((element) => {
        console.log(element);
      });
      return true;
    } catch (rej) {
      alert(rej);
      return false;
    }
  };

  useEffect(() => {
    getArticles({ address: "article" });
  }, []);
  return (
    <Grid
      container
      spacing={3}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <ButtonBase
          variant="contained"
          onClick={() => navigate("create-article")}
        >
          <AddCircleOutlineRoundedIcon />
          <Typography>مقاله جدید</Typography>
        </ButtonBase>
      </Stack>
      {POSTS.map((post, index) => (
        <ArticleCard
          key={post.id}
          article={post}
          index={index}
        />
      ))}
    </Grid>
  );
};

export default Articles;
