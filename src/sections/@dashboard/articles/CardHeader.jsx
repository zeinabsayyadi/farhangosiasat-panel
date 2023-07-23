import { CardHeader, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  deleteArticle as deleteArticle_api,
  putArticle as putArticle_api,
} from "../../../api/admin";
import { useState } from "react";
const CustomCardHeader = () => {
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
              <MenuItem onClick={() => deleteArticle(data)}>Delete</MenuItem>
            </NavLink>
          </Menu>
        </>
      }
    />
  );
};

export default CustomCardHeader;
