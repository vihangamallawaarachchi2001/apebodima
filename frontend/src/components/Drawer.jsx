import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AdsIcon from "@mui/icons-material/AdUnits";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TicketIcon from "@mui/icons-material/ConfirmationNumber";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BlogIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import { Typography, Avatar } from "@mui/material";

/*

      <DrawerHeader>
        <Avatar sx={{ marginRight: 2 }}>U</Avatar>
        <Typography variant="h6" noWrap>
          User Name
        </Typography>
      </DrawerHeader>
*/

// Custom styled components
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function SwipeableTemporaryDrawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, to: "/" },
          { text: "All ads", icon: <AdsIcon />, to: "/all" },
          { text: "About", icon: <InfoIcon />, to: "/about" },
          { text: "Login", icon: <LoginIcon />, to: "/login" },
          { text: "Contact", icon: <ContactMailIcon />, to: "/contact" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </StyledListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ typography: "body1" }}>
        {[
          { text: "Raise Ticket", icon: <TicketIcon />, to: "/" },
          { text: "Notification", icon: <NotificationsIcon />, to: "/notification" },
          { text: "Blog", icon: <BlogIcon />, to: "/blog" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </StyledListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#5e81f7",
        },
      }}
    >
      {list()}
    </SwipeableDrawer>
  );
}
