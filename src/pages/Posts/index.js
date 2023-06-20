// @mui
import { Grid, Container, Stack, Typography, ButtonBase } from "@mui/material";
// components
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../../sections/@dashboard/blog";
// mock
import POSTS from "../../_mock/blog";
const SORT_OPTIONS = [
  { value: "latest", label: "جدیدترین" },
  { value: "popular", label: "محبوب ترین" },
  { value: "oldest", label: "قدیمی ترین" },
];
const Posts = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            بلاگ
          </Typography>
          <ButtonBase variant="contained">
            <AddCircleOutlineRoundedIcon />
            <Typography>پست جدید</Typography>
          </ButtonBase>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid
          container
          spacing={3}
        >
          {POSTS.map((post, index) => (
            <BlogPostCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Posts;
