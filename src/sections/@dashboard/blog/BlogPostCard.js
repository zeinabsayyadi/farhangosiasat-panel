import PropTypes from "prop-types";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  useTheme,
} from "@mui/material";
// utils
import { fDate } from "../../../utils/formatTime";

// ----------------------------------------------------------------------

const StyledCardMedia = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

// const StyledInfo = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "flex-end",
//   marginTop: theme.spacing(3),
//   color: theme.palette.text.disabled,
// }));

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { id,mediaType, cover, title, createdAt } = post;
  // const latestPostLarge = index === 0;
  // const latestPost = index === 1 || index === 2;
  const theme = useTheme();
  // const POST_INFO = [
  //   { number: comment, icon: "eva:message-circle-fill" },
  //   { number: view, icon: "eva:eye-fill" },
  //   { number: share, icon: "eva:share-fill" },
  // ];

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
    >
      <Card sx={{ position: "relative" }}>
        <StyledCardMedia
          sx={{
            ...{
              pt: "calc(100% * 4 / 3)",
              "&:after": {
                top: 0,
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            },
            ...{
              pt: {
                xs: "calc(100% * 4 / 3)",
                sm: "calc(100% * 3 / 4.66)",
              },
            },
          }}
        >
          {/* <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              color: "background.paper",
              ...((latestPostLarge || latestPost) && { display: "none" }),
            }}
          /> */}
          {/* <StyledAvatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          /> */}

          <StyledCover
            alt={title}
            src={cover}
          />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
            ...{
              bottom: 0,
              width: "100%",
              position: "absolute",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: theme.palette.text.primary.light, display: "block" }}
          >
            {fDate(createdAt)}
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle1"
            underline="hover"
            sx={{
              color: theme.palette.text.secondary.main,
            }}
          >
            {title}
          </StyledTitle>

          {/* <StyledInfo>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: "grey.500",
                  }),
                }}
              >
                <Avatar>{info?.icon}</Avatar>
                <Typography variant="caption">
                  {fShortenNumber(info.number)}
                </Typography>
              </Box>
            ))}
          </StyledInfo> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
