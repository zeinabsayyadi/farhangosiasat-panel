import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Link,
  Drawer,
  Typography,
  Avatar,
  Stack,
  useTheme,
  ButtonBase,
} from "@mui/material";

// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Logo from "../../../images/logo.svg";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section";
//
import navConfig from "./config";
import { ContextStore } from "../../../context";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

const Nav = ({ openNav, onCloseNav }) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useContext(ContextStore);
  console.log("user in sidebar", user);
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <ButtonBase onClick={() => console.log("go to website home ")}>
        <Box sx={{ px: 2.5, py: 3, display: "inline-flex", gap: "4px" }}>
          <img
            src={Logo}
            alt="React Logo"
          />
          <Typography>انجمن فرهنگ و سیاست دانشگاه شیراز</Typography>
        </Box>
      </ButtonBase>

      <Stack
        alignItems="center"
        spacing={3}
        sx={{ pt: 5, borderRadius: 2, position: "relative" }}
      >
        <ButtonBase onClick={() => navigate("/dashboard/account")}>
          <StyledAccount theme={theme}>
            <Avatar
              src={user?.photo}
              alt="photoURL"
            />

            <Box sx={{ ml: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.primary" }}
              >
                {user.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {user?.role}
              </Typography>
            </Box>
          </StyledAccount>
        </ButtonBase>
      </Stack>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        ></Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};
export default Nav;
