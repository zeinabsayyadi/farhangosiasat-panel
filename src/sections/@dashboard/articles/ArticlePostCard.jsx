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
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// utils
import { fDate } from "../../../utils/formatTime";
import { useContext, useState } from "react";
import { ContextStore } from "../../../context";
import { NavLink } from "react-router-dom";
import {
  deleteArticle as deleteArticle_api,
  putArticle as putArticle_api,
} from "../../../api/admin";

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
  const { user } = useContext(ContextStore);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState("");
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMoreVert = (e) => {
    setAnchorEl(e.currentTarget);
    //setCurrentArticle(current);
  };
  let data = {
    address: "article/4",
    body: {
      content: "rejgoijhrhjoesjhsoegjeogj",
    },
  };
  const editeArticle = async (data) => {
    //myDispatch({ type: "backdrop_show" });
    try {
      const res = await putArticle_api(data, { token: "admin" });
      console.log(res.data);
      return true;
    } catch (rej) {
      alert(rej);
      return false;
    }
  };

  const deleteArticle = async (data) => {
    //myDispatch({ type: "backdrop_show" });
    try {
      const res = await deleteArticle_api(data, { token: "admin" });
      console.log(res?.data);
      return true;
    } catch (rej) {
      alert(rej);
      return false;
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card sx={{ position: "relative" }}>
        <CardHeader
          sx={{
            position: "reletive",
            paddingTop: "0.5rem",
          }}
          action={
            <>
              <IconButton
                aria-label="more"
                onClick={handleMoreVert}
                aria-haspopup="true"
                aria-controls="long-menu"
              >
                <MoreVertIcon color="white" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                onClose={handleClose}
                open={open}
              >
                <NavLink to="/Edite">
                  <MenuItem onClick={() => editeArticle(data)}>Edite</MenuItem>
                </NavLink>
                <NavLink to="/Articles">
                  <MenuItem onClick={() => deleteArticle(data)}>
                    Delete
                  </MenuItem>
                </NavLink>
              </Menu>
            </>
          }
        />
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
