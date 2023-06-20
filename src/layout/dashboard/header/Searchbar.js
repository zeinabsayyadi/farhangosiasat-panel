import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Input,
  Slide,
  IconButton,
  InputAdornment,
  ClickAwayListener,
  ButtonBase,
  useTheme,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// component

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  //boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <SearchRoundedIcon />
          </IconButton>
        )}

        <Slide
          direction="down"
          in={open}
          mountOnEnter
          unmountOnExit
        >
          <StyledSearchbar theme={theme}>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <ButtonBase
              variant="contained"
              onClick={handleClose}
            >
              Search
            </ButtonBase>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
