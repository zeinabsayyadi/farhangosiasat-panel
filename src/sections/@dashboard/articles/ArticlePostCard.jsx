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
  CardActionArea,

} from "@mui/material";

// utils
import { fDate } from "../../../utils/formatTime";
import { NavLink } from "react-router-dom";
import CustomCardHeader from "./CardHeader";

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

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

const ArticleCard = ({ article, index }) => {
  const {
    //id,
    //mediaType,
    cover,
    // images,
    title,
    // subtitle,
    // content,
    //author,
    createdAt,
  } = article;
  const theme = useTheme();
 

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card sx={{ position: "relative" }}>
        <CustomCardHeader/>
        <CardActionArea onClick={() => console.log(" go to card single page")}>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  index: PropTypes.number,
};
export default ArticleCard;
